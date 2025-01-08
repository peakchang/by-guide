<script>
    import { goto } from "$app/navigation";
</script>

<!-- 숨겨진 헤더!!!!!!!!!!!!!!!!!!!!!! -->
<div class="fixed top-0 left-0 w-full bg-green-50 z-50 suit-font">
    <div class="max-w-[530px] mx-auto bg-white border-b">
        <div class="px-3 py-1 flex justify-between items-center">
            <!-- svelte-ignore a11y_click_events_have_key_events -->
            <!-- svelte-ignore a11y_no_static_element_interactions -->
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
    <div class="max-w-[530px] mx-auto suit-font bg-white p-3 pt-14">
        <div class="text-center font-semibold text-xl">구인글 등록</div>

        <form action="">
            <div class="mt-5">
                <div class="font-semibold text-lg">공고제목</div>
                <div class="mt-1.5">
                    <input
                        type="text"
                        placeholder="Type here"
                        class="input input-bordered input-info input-sm w-full"
                    />
                </div>

                <div class="mt-3 font-semibold text-lg">현장 포인트</div>
                <div class="mt-1.5">
                    <textarea
                        class="textarea textarea-info w-full p-2"
                        placeholder="Bio"
                    ></textarea>
                </div>

                <div class="mt-3 font-semibold text-lg">근무지역</div>
                <div class="mt-1.5">
                    <textarea
                        class="textarea textarea-info w-full p-2"
                        placeholder="Bio"
                    ></textarea>
                </div>

                <div>
                    대행사
                </div>
            </div>
        </form>
    </div>
</div>
