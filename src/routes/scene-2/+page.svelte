<script>
	import StudentCard from "$lib/StudentCard.svelte";
	import { students } from "$lib/student-data";

	import { child, get, getDatabase, onValue, ref, off } from "firebase/database";

	let module2Students = students.filter((student) => student.learningObject == "Module 2");

	let statusRef = ref(getDatabase(), `live-calls/test`);
	onValue(statusRef, async () => {
		console.log("count upated");
		alert("Recieved Event");
	});
</script>

<div class="container mx-auto p-8 space-y-8">
	<h1>Study Group Two</h1>
	<p>Students Online Studying Module 2</p>

	<div class="bg-surface-100-800-token mx-auto mb-2 w-11/12 max-w-full place-items-center overflow-hidden rounded-xl p-4">
		<div class="flex flex-wrap justify-center">
			{#each module2Students as student}
				<StudentCard {student} />
			{/each}
		</div>
	</div>
</div>
