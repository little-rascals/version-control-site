{#each pods as pod}
  <Pod pod="{pod}" />
{/each}

<script>
  import Pod from "./Pod.svelte";

  const pods = [
    {
      title: "episode-#1",
      slug: "episode-#1",
      number: 1,
      date: "18-01-2021"
    },
    {
      title: "episode-#2",
      slug: "episode-#2",
      number: 2,
      date: "19-01-2021"
    },
    {
      title: "episode-#3",
      slug: "episode-#3",
      number: 3,
      date: "20-01-2021"
    },
    {
      title: "episode-#4",
      slug: "episode-#4",
      number: 4,
      date: "21-01-2021"
    },
    {
      title: "episode-#5",
      slug: "episode-#5",
      number: 5,
      date: "22-01-2021"
    },
    {
      title: "episode-#6",
      slug: "episode-#6",
      number: 6,
      date: "23-01-2021"
    },
    {
      title: "episode-#7",
      slug: "episode-#7",
      number: 7,
      date: "24-01-2021"
    },
    {
      title: "episode-#8",
      slug: "episode-#8",
      number: 8,
      date: "25-01-2021"
    },
    {
      title: "episode-#9",
      slug: "episode-#9",
      number: 9,
      date: "26-01-2021"
    },
    {
      title: "episode-#10",
      slug: "episode-#10",
      number: 10,
      date: "27-01-2021"
    },
  ];
</script>
