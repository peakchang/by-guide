<script>
    let testList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
</script>

<div class="fixed top-10 left-0 w-full z-40">
    <div class="max-w-[530px] mx-auto suit-font">
        <div class="flex justify-between bg-white p-3">인재정보</div>
    </div>
</div>

<div class="z-50" style="padding-top: 95px; padding-bottom:70px">
    {#each testList as test}
        <div class="p-3 bg-white rounded-lg mb-2">
            <div class="flex gap-5 items-center">
                <div class="w-14 h-14 min-w-14">
                    <div
                        class="border-2 border-gray-300 rounded-xl overflow-hidden"
                    >
                        <img src="/profile-base.png" alt="" />
                    </div>
                </div>

                <div class="flex flex-col min-w-0">
                    <span class="text-sm"
                        >경기도 | 남자 |
                        <i class="fa fa-clock-o" aria-hidden="true"></i>
                        2025 / 01 / 09
                    </span>
                    <span
                        class="w-full block overflow-hidden text-ellipsis whitespace-nowrap"
                        >Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Ut nihil aut veritatis officia ex, nemo rerum
                        repudiandae vitae quia recusandae necessitatibus.
                        Perspiciatis maxime in quae ab expedita vel maiores
                        sapiente?</span
                    >
                    <span class="text-sm"> #상담사 #4년 #28살 </span>
                </div>
            </div>
        </div>
    {/each}
</div>
