<script>
    import { goto } from "$app/navigation";
    import { back_api } from "$src/lib/const";
    import { formatTime, generateRandomNumber } from "$src/lib/lib";
    import QuestionItem from "$src/lib/components/QuestionItem.svelte";
    import axios from "axios";

    let id = $state("");
    let name = $state("");
    let phone = $state("");
    let idSuccessBool = $state(false);
    let idErrBool = $state(false); // 아이디 창을 벗어났을때 중복된 아이디가 없는지 체크
    let authNumber = $state(""); // 발송되는 인증번호

    let authNumChk = $state(""); // 실제 입력되는 인증번호
    let authShowBool = $state(false); // 인증번호 발송 시작되면 하단 인증 창 보여주기 위한 변수
    let authBool = $state(false); // 마무리 체크 단계 false 면 회원가입 안됨!
    let timeLeft = $state(180); // 인증번호 카운트 다운 떨어지는 숫자!
    let interval = $state(null); // 인증번호 카운트 다운 시 setInerval 셋팅 변수

    let password = $state("");
    let passwordChk = $state("");
    let pwdErrShowBool = $state(false); // 비밀번호가 일치하지 않을시 에러 창 뜨게!
    let pwdSuccessShowBool = $state(false); // 비밀번호가 일치하면 정상 창 뜨게!

    async function id_duplicate_chk() {
        if (id) {
            try {
                const res = await axios.post(`/auth/join/id_duplicate_chk`, {
                    id,
                });
                if (res.status == 200) {
                    if (res.data.status == false) {
                        idErrBool = true;
                        idSuccessBool = false;
                    } else {
                        idErrBool = false;
                        idSuccessBool = true;
                    }
                } else {
                    alert("에러발생! 다시 시도해주세요!");
                    id = "";
                }
            } catch (error) {}
        }
    }

    async function startAuth() {
        if (!phone) {
            alert("전화번호를 입력해주세요");
            return;
        }
        authShowBool = true;
        authNumber = generateRandomNumber();

        try {
            const res = await axios.post(`${back_api}/send-sms`, {
                phone,
                message: `분양가이드 인증번호 ${authNumber}`,
            });
            if (res.status == 200) {
                if (!interval) {
                    interval = setInterval(() => {
                        if (timeLeft > 0) {
                            timeLeft -= 1;
                        } else {
                            authNumber = "";
                            authShowBool = false;
                            clearInterval(interval);
                            interval = null;
                            timeLeft = 180;
                            alert("시간이 만료 되었습니다. 다시 시도해주세요.");
                        }
                    }, 1000);
                }
            }
        } catch (error) {}
    }

    function checkAuthStop() {
        if (authNumber == authNumChk) {
            alert("인증 되었습니다.");
            clearInterval(interval);
            interval = null;
            authShowBool = false;
            authBool = true;
        }
    }

    function chkPwdFunc() {
        pwdErrShowBool = false;
        pwdSuccessShowBool = false;
        if (password != "" && passwordChk != "" && password == passwordChk) {
            pwdSuccessShowBool = true;
        } else if (
            password != "" &&
            passwordChk != "" &&
            password != passwordChk
        ) {
            pwdErrShowBool = true;
        }
    }

    async function joinSubmit(e) {
        e.preventDefault();
        if (!id) {
            alert("아이디를 입력하세요");
            return;
        }
        if (idErrBool == true) {
            alert("중복된 아이디입니다.");
            return;
        }
        if (!name) {
            alert("이름을 입력하세요");
            return;
        }
        if (!phone) {
            alert("전화번호를 입력하세요");
            return;
        }
        if (!authBool) {
            alert("휴대폰 인증을 완료해주세요");
            return;
        }
        if (!password) {
            alert("비밀번호를 입력하세요");
            return;
        }
        if (password != passwordChk) {
            alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
            return;
        }

        try {
            const res = await axios.post("/auth/join", {
                id,
                name,
                phone,
                password,
            });
            if (res.status === 200) {
                alert("회원가입 성공! 로그인 해주세요");
                goto("/auth/login");
            }
        } catch (error) {
            console.error(error);
            alert("회원가입 실패 다시 시도해주세요");
        }
    }
</script>

<div class="bg-green-50 relative min-h-screen">
    <div class="max-w-[530px] mx-auto suit-font pt-12 pb-10 bg-white p-14">
        <div class="text-center bg-white">
            <img src="/logo.png" alt="" class=" max-w-[150px] mx-auto" />
            <div>회원가입</div>
        </div>

        <div class="mt-12">
            <!-- svelte-ignore event_directive_deprecated -->
            <form on:submit={joinSubmit}>
                <label
                    class="input input-bordered flex items-center gap-2 text-sm mt-5"
                >
                    <span class="min-w-4 flex justify-center">
                        <i class="fa fa-id-card-o opacity-70" aria-hidden="true"
                        ></i>
                    </span>

                    <!-- svelte-ignore event_directive_deprecated -->
                    <input
                        type="text"
                        class="grow"
                        placeholder="아이디를 입력하세요"
                        bind:value={id}
                        on:focusin={() => {
                            idErrBool = false;
                            idSuccessBool = false;
                        }}
                        on:focusout={id_duplicate_chk}
                    />
                </label>
                {#if idErrBool == true}
                    <div class="text-right text-xs text-red-500 mt-1">
                        아이디가 중복됩니다. 다시 입력해주세요.
                    </div>
                {:else if idSuccessBool == true}
                    <div class="text-right text-xs text-green-600 mt-1">
                        사용 가능한 아이디 입니다.
                    </div>
                {/if}

                <label
                    class="input input-bordered flex items-center gap-2 text-sm mt-5"
                >
                    <span class="min-w-4 flex justify-center">
                        <i class="fa fa-user opacity-70" aria-hidden="true"></i>
                    </span>
                    <input
                        type="text"
                        class="grow"
                        placeholder="이름을 입력하세요"
                        bind:value={name}
                    />
                </label>

                <div class="flex items-center mt-5 gap-2">
                    <label
                        class="input input-bordered flex items-center gap-2 text-sm w-full"
                    >
                        <span class="min-w-4 flex justify-center">
                            <i
                                class="fa fa-mobile text-lg opacity-70"
                                aria-hidden="true"
                            ></i>
                        </span>

                        <input
                            type="text"
                            class="grow"
                            placeholder="휴대폰 번호를 입력하세요"
                            disabled={authShowBool || authBool}
                            bind:value={phone}
                        />
                        <!-- disabled -->
                    </label>

                    <button
                        type="button"
                        class="btn btn-success text-white"
                        disabled={authShowBool || authBool}
                        on:click={startAuth}
                    >
                        인증받기
                    </button>
                </div>

                {#if authShowBool}
                    <div class="flex items-center mt-1.5 gap-2">
                        <label
                            class="input input-bordered flex items-center gap-2 text-sm w-full"
                        >
                            <span
                                class="min-w-4 flex justify-center text-red-400"
                            >
                                {formatTime(timeLeft)}
                            </span>

                            <input
                                type="text"
                                class="grow"
                                placeholder="인증번호를 입력하세요"
                                bind:value={authNumChk}
                            />
                        </label>

                        <button
                            type="button"
                            class="btn btn-warning text-white"
                            on:click={checkAuthStop}
                        >
                            인증확인
                        </button>
                    </div>
                {/if}

                <label
                    class="input input-bordered flex items-center gap-2 text-sm mt-5"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        class="h-4 w-4 opacity-70"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                            clip-rule="evenodd"
                        />
                    </svg>
                    <input
                        type="password"
                        class="grow"
                        placeholder="비밀번호를 입력하세요"
                        bind:value={password}
                        on:focusout={chkPwdFunc}
                    />
                </label>

                <label
                    class="input input-bordered flex items-center gap-2 text-sm mt-5"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        class="h-4 w-4 opacity-70"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                            clip-rule="evenodd"
                        />
                    </svg>
                    <input
                        type="password"
                        class="grow"
                        placeholder="비밀번호 확인"
                        bind:value={passwordChk}
                        on:focusout={chkPwdFunc}
                    />
                </label>
                {#if pwdErrShowBool == true}
                    <div class="text-right text-xs text-red-500 mt-1">
                        비밀번호 확인이 일치하지 않습니다. 다시 시도해주세요
                    </div>
                {:else if pwdSuccessShowBool == true}
                    <div class="text-right text-xs text-green-600 mt-1">
                        비밀번화 확인이 일치합니다.
                    </div>
                {/if}

                <div class="mt-5">
                    <button class="btn btn-info w-full text-white"
                        >회원가입하기</button
                    >
                </div>
            </form>
        </div>
    </div>
</div>

<style>
</style>
