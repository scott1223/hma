<script>
	import HeroSoloCase from "$lib/components/solocase/HeroSoloCase.svelte";
	import FullImage from "$lib/components/solocase/FullImage.svelte";
	import DescriptionBlock from "$lib/components/solocase/DescriptionBlock.svelte";
	import SliderCase from "$lib/components/solocase/SliderCase.svelte";
	import NextPrev from "../../../lib/components/solocase/NextPrev.svelte";

</script>

<HeroSoloCase />
<FullImage link={'/hero1.png'} />
<DescriptionBlock /> 
<SliderCase />
<DescriptionBlock /> 
<NextPrev />