<script>
	import StudentCard from "$lib/StudentCard.svelte";
	import { students } from "$lib/student-data";
	import FaPhone from "svelte-icons/fa/FaPhone.svelte";
</script>

<div class="container mx-auto p-8 space-y-8">
	<h1>Tutors Live</h1>
	<p>All Students Online right now</p>
	<p>
		Invite all to Group Call
		<button class="btn variant-filled-secondary btn-base ring-2 ring-primary-500 ring-inset text-filled-500">
			Start Group Call
			<div class="icon" style="color: green; width: 28px; height:28px; margin-left: 8px">
				<FaPhone />
			</div>
		</button>
	</p>
	<div class="bg-surface-100-800-token mx-auto mb-2 w-11/12 max-w-full place-items-center overflow-hidden rounded-xl p-4">
		<div class="flex flex-wrap justify-center">
			{#each students as student}
				<StudentCard {student} />
			{/each}
		</div>
	</div>
</div>
