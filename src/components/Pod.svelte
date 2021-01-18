
    <div class="bg-gray-300 w-1/3 border-b-2 border-gray-400">
        <span class="uppercase">episode {pod.number}</span>
        |
        <span>{pod.date}</span>
        <div class="font-bold capitalize">{pod.title}</div>
    </div>

<script lang="ts">
  export let pod: {
    slug: string;
    title: string;
    html?: any;
    number: number;
    date: string;
  };
</script>
