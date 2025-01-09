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
            준비중
        </div>
    </div>
</div>
