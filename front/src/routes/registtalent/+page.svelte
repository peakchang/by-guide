<script>
    import { goto } from "$app/navigation";
    import QuestionItem from "$src/lib/components/QuestionItem.svelte";

    let daehang = $state("");
    let testifif = $state("");

    let locationList = $derived([
        "서울",
        "경기북부",
        "경기남부",
        "인천",
        "충청",
        "전라",
        "강원도",
        "경상도",
        "제주도",
    ]);

    let businessCategorys = $derived([
        "아파트",
        "오피스텔",
        "도시형생활주택(도생)",
        "호텔",
        "레지던스",
        "상가/쇼핑몰",
        "오피스",
        "지식산업센터",
        "토지",
        "빌라",
        "타운하우스",
        "펜션/풀빌라",
        "전원주택",
        "기타",
    ]);

    let jobCategorys = $derived([
        "시행/대행사무직",
        "분양대행사",
        "본부장",
        "팀장",
        "직원",
        "데스크",
        "TM상담사",
        "알바",
    ]);

    let sexList = $derived(["남자", "여자", "비공개"]);

    let feeBases = $derived(["본부", "팀", "직원", "상담시"]);

    let SelFeeBase = $state("");
</script>

<div class="fixed top-0 left-0 w-full bg-green-50 z-50 suit-font">
    <div class="max-w-[530px] mx-auto bg-white border-b">
        <div class="px-3 py-1 flex justify-between items-center">
            <!-- svelte-ignore a11y_click_events_have_key_events -->
            <!-- svelte-ignore a11y_no_static_element_interactions -->
            <!-- svelte-ignore event_directive_deprecated -->
            <div
                class="text-3xl w-12 cursor-pointer"
                style="color: #3da83b;"
                on:click={() => {
                    window.history.back();
                }}
            >
                <i class="fa fa-angle-left" aria-hidden="true"></i>
            </div>
            <!-- svelte-ignore a11y_click_events_have_key_events -->
            <!-- svelte-ignore a11y_no_static_element_interactions -->
            <!-- svelte-ignore event_directive_deprecated -->
            <div
                class="cursor-pointer"
                on:click={() => {
                    goto("/");
                }}
            >
                <img src="/logo.png" alt="" class=" max-w-[110px]" />
            </div>
            <div class="w-12"></div>
        </div>
    </div>
</div>

<div class="bg-green-50 relative min-h-screen">
    <div class="max-w-[530px] mx-auto suit-font pt-12 pb-24">
        <div class="text-center font-semibold text-xl bg-white p-3">
            내 인재정보
        </div>

        <form action="">
            <div class="mt-2 bg-white p-3">
                <div class="text-center mb-1">
                    프로필 이미지
                </div>
                <div class="w-20 h-20 relative mx-auto text-center">
                    <!-- svelte-ignore a11y_consider_explicit_label -->
                    <button
                        class="absolute bottom-[-10px] right-[-10px] w-7 h-7 border-2 rounded-full bg-white text-xs text-gray-500"
                    >
                        <i class="fa fa-camera" aria-hidden="true"></i>
                    </button>
                    <div
                        class="border-2 border-gray-300 rounded-xl overflow-hidden"
                    >
                        <img src="/profile-base.png" alt="" />
                    </div>

                    
                </div>
                
            </div>

            <div class="mt-2 bg-white p-5">
                <div class="font-semibold text-lg">제목</div>
                <div class="mt-1.5">
                    <input
                        type="text"
                        placeholder="Type here"
                        class="input input-bordered input-info input-sm w-full"
                    />
                </div>

                <div class="flex w-full items-center mt-5">
                    <div class="w-1/5 text-center text-sm">성별 *</div>
                    <div class="w-4/5 flex gap-1">
                        {#each sexList as sex}
                            <label class="button-checkbox w-full">
                                <input
                                    type="radio"
                                    value={sex}
                                    hidden
                                    bind:group={SelFeeBase}
                                />
                                <div class="">{sex}</div>
                            </label>
                        {/each}
                    </div>
                </div>

                <QuestionItem
                    sbj="연령 *"
                    placeholder="필수입력"
                    bind:iptVal={daehang}
                />

                <div class="mt-5 flex w-full items-center">
                    <div class="w-1/5 text-center text-sm">휴대전화 *</div>
                    <div class="w-4/5 flex gap-1">
                        <input
                            type="text"
                            placeholder="번호 입력 후 인증을 완료 해주세요"
                            class="input input-bordered input-info input-sm w-full"
                        />
                        <button class="btn btn-outline btn-info btn-sm"
                            >인증</button
                        >
                    </div>
                </div>
                <div class="mt-1 text-right text-xs">
                    인증이 완료 되었습니다.
                </div>

                <div class="mt-5">
                    <div class="pl-3 text-left text-sm">
                        <span>희망지역 *</span>
                        <span class="text-xs">(여러개 선택 가능)</span>
                    </div>
                    <div class="mt-3 grid grid-cols-2 gap-1">
                        {#each locationList as location, idx}
                            <label class="button-checkbox">
                                <input type="checkbox" hidden />
                                <div>{location}</div>
                            </label>
                        {/each}
                    </div>
                </div>

                <div class="mt-5">
                    <div class="pl-3 text-left text-sm">
                        <span>희망업종 *</span>
                        <span class="text-xs">(여러개 선택 가능)</span>
                    </div>
                    <div class="mt-3 grid grid-cols-2 gap-1">
                        {#each businessCategorys as businessCategory, idx}
                            <label class="button-checkbox">
                                <input type="checkbox" hidden />
                                <div>{businessCategory}</div>
                            </label>
                        {/each}
                    </div>
                </div>

                <div class="mt-5">
                    <div class="pl-3 text-left text-sm">
                        <span>희망직종 *</span>
                        <span class="text-xs">(여러개 선택 가능)</span>
                    </div>
                    <div class="mt-3 grid grid-cols-2 gap-1">
                        {#each jobCategorys as jobCategory, idx}
                            <label class="button-checkbox">
                                <input type="checkbox" hidden />
                                <div>{jobCategory}</div>
                            </label>
                        {/each}
                    </div>
                </div>

                <QuestionItem
                    sbj="경력기간"
                    placeholder="미입력시 초보로 표기"
                    bind:iptVal={daehang}
                />

                <div class="mt-3 font-semibold text-lg">경력 및 기타 소개</div>
                <div class="mt-1.5">
                    <textarea
                        class="textarea textarea-info w-full p-2"
                        rows="5"
                        placeholder="Bio"
                    ></textarea>
                </div>

                <div class="mt-2 bg-white p-5">
                    <div class="mt-1.5">
                        <button class="btn btn-success w-full text-white"
                            >등록하기</button
                        >
                    </div>
                </div>
            </div>
        </form>
    </div>
</div>

<style>
    .button-checkbox div {
        display: block;
        background-color: #f0f0f0;
        color: #333;
        font-size: 14px;
        border: 1.5px solid #ccc;
        border-radius: 5px;
        padding: 8px 0;
        text-align: center;
        cursor: pointer;
        transition: all 0.3s;
    }

    .button-checkbox input[type="checkbox"]:checked + div {
        background-color: #08b9ff;
        color: white;
        border-color: #0099ff;
    }

    .button-checkbox input[type="radio"]:checked + div {
        background-color: #08b9ff;
        color: white;
        border-color: #0099ff;
    }
</style>
