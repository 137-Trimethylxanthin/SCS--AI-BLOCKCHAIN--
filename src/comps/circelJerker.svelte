

<script lang="ts">
    let { max=100, curr=50, radius, len=360, bg="#000000", size=360} : {max: number, curr:number, radius:number, len: number, bg:string, size: number} = $props();

    if (len > 360) {
        len = 360;
    }
    if (len < 30) {
        len = 30;
    }

    const percent = $derived((curr / max) * 100);
    const circumference = 2 * Math.PI * radius;
    const dashArray = circumference;
    let dashOffset = circumference - (len / 360) * circumference * (percent / 100);
    //ammoint to remove from the wohle circle to have a half circle in degress
    let removeDashOffset = circumference * (len / 360)
</script>

<style>
    .circle {
        transform: rotate( 0deg);
        transform-origin: 50% 50%;
    }


</style>

<div>
    <svg width="{size}" height="{size}" viewBox="0 0 120 120"
    style="transform: rotate({90 - (360 - len)/2}deg) ; transform-origin: 50% 50%;"
    >
        <!--BG-->

        <circle
            cx="60"
            cy="60"
            r={radius}
            stroke="gray"
            stroke-width="10"
            fill="none"
            stroke-dasharray={circumference}
            class="circle"
        />
        <!--Progress-->
        <circle
            cx="60"
            cy="60"
            r={radius}
            stroke="red"
            stroke-width="10"
            fill="none"
            stroke-dasharray={dashArray}
            stroke-dashoffset={dashOffset}
            class="circle"
            style="transform: rotate({(360 - len)}deg); transform-origin: 50% 50%;"
        />

        <!--TÖTER-->
        <circle
            cx="60"
            cy="60"
            r={radius}
            stroke="black"
            stroke-width="11"
            fill="none"
            stroke-dasharray={dashArray}
            stroke-dashoffset={removeDashOffset}
            class="progress-circle"
        />


    </svg>
</div>