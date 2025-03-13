<script>
    import { goto } from "$app/navigation";

    let tempArr = $state([
        1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 12, 13, 14, 15, 16,
    ]);

    function goToDetail() {
        goto(`/sitedetail/1`);
    }
</script>

<!-- 상단 고정 -->
<div class="fixed top-10 left-0 w-full z-40">
    <div class="max-w-[530px] mx-auto pretendard bg-white p-3">
        <ul class="flex justify-between">
            <li class="font-bold text-green-600 cursor-pointer">전국</li>
            <li class="cursor-pointer">서울/경기/인천</li>
            <li class="cursor-pointer">충청/전라</li>
            <li class="cursor-pointer">강원/경상/제주</li>
        </ul>
    </div>
</div>



<div class="z-50" style="padding-top: 95px; padding-bottom:70px">
    {#each tempArr as temp}
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <!-- svelte-ignore event_directive_deprecated -->
        <div
            class="flex gap-3 w-full px-3 py-2 cursor-pointer bg-white mb-1.5 rounded-md"
            on:click={goToDetail}
        >
            <div class="w-1/2">
                <img src="/sample_img1.jpg" alt="" />
            </div>
            <div class="w-1/2 flex flex-col justify-center items-center">
                <span class="bg-red-500 py-0.5 px-3 text-white font-bold"
                    >파격혜택제공!</span
                >
                <span>지젤라이프그라피서초</span>
                <span>경기 | 아파트 | 직원</span>
                <span>수수료 : 4,000</span>
            </div>
        </div>
    {/each}
</div>
