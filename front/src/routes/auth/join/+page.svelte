<script>
    import { goto } from "$app/navigation";
    import QuestionItem from "$src/lib/components/QuestionItem.svelte";
    import axios from "axios";

    let id = "";

    async function id_duplicate_chk() {
        console.log(id);
    }
</script>

<div class="bg-green-50 relative min-h-screen">
    <div class="max-w-[530px] mx-auto suit-font pt-12 pb-10 bg-white p-14">
        <div class="text-center bg-white">
            <img src="/logo.png" alt="" class=" max-w-[150px] mx-auto" />
            <div>회원가입</div>
        </div>

        <div class="mt-12">
            <form action="">
                <label
                    class="input input-bordered flex items-center gap-2 text-sm mt-5"
                >
                    <span class="min-w-4 flex justify-center">
                        <i class="fa fa-id-card-o opacity-70" aria-hidden="true"
                        ></i>
                    </span>

                    <input
                        type="text"
                        class="grow"
                        placeholder="아이디를 입력하세요"
                        bind:value={id}
                        on:focusout={id_duplicate_chk}
                    />
                </label>
                <!-- <div class="text-right text-xs text-red-500 mt-1">
                    아이디를 입력해주세요
                </div> -->

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
                    />
                </label>

                <label
                    class="input input-bordered flex items-center gap-2 text-sm mt-5"
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
                        placeholder="비밀번호를 입력하세요"
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
                    />
                </label>

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
