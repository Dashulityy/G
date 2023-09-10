import slide from './slide.vue'

export default {
    title: 'slide',
    component: {
        slide
    }
}

const template = () => ({
    components: {
        xSlide: slide
    },
    template: `<x-slide></x-slide>`
})

export const Default = template.bind({});