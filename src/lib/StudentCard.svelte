<script lang="ts">
	import type { Student } from "$lib/student-types";
	import { Avatar } from "@skeletonlabs/skeleton";
	import FaPhone from "svelte-icons/fa/FaPhone.svelte";
	import FaFacebookMessenger from "svelte-icons/fa/FaFacebookMessenger.svelte";

	export let student: Student;
</script>

<div>
	<div class="card w-60 h-[24rem] overflow-x-hidden m-1 border-y-8 border-primary-500">
		<div class="flex">
			<header class="card-header inline-flex items-center">
				<div class="inline-flex w-full">
					<Avatar src={student.image} alt={student.name} class="mr-2" />
					<h6>
						{student.name}
						<button class="btn variant-filled-secondary btn-base ring-2 ring-primary-500 ring-inset text-filled-500">
							<div class="icon" style="color: orange; width: 16px; height:16px">
								<FaFacebookMessenger />
							</div>
						</button>
						<button class="btn variant-filled-secondary btn-base ring-2 ring-primary-500 ring-inset text-filled-500">
							<div class="icon" style="color: green; width: 16px; height:16px">
								<FaPhone />
							</div>
						</button>
					</h6>
				</div>
			</header>
		</div>
		<figure class="flex justify-center object-scale-down mt-4 p-1 h-40">
			<img src="/topic.jpg" alt="topic" />
		</figure>
		<div class="card-body text-center">
			Studying Lab: {@html student.lab}
		</div>
		<footer class="card-footer text-center">
			<p class="mt-2 italic">
				{@html student.learningObject}
			</p>
		</footer>
	</div>
</div>
