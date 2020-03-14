<template lang="pug">
	.CircleCategory
		.line(:style="{ 'background-color': backgroundColor }")
		.main_button(:style="{ 'background-color': backgroundColor }")
			router-link.main_button_items(:to="link")
				b-icon(:icon="iconName")
				p {{ categoryTitle }}
				b-icon(icon="angle-right")

</template>

<script lang="ts">
export default {
    props: {
			backgroundColor: String,
			categoryTitle: String,
			iconName: String,
			link: String,
			linkId: Number
		}
}
</script>

<style lang="sass" scoped>
	.CircleCategory
		.line
			width: 100%
			height: 8px
			margin-bottom: -4px
		.main_button
			max-width: 125px
			border-top-right-radius: 6px
			border-bottom-right-radius: 6px
			&_items
				color: white
				padding: 0 0 4px 4px
				display: flex
				flex-direction: row
				align-items: center
				p
					margin-right: 10px 
					font-size: 10px

</style>