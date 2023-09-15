import { shallowMount } from "@vue/test-utils"
import { toggler } from "@/components/toggler"

describe("toggler", () => {
    it('При клике изменяется надпись View/Hide issues', async () => {
        const wrapper = shallowMount(toggler)
        expect(wrapper.find('.text').text()).toBe('View issues')
        await wrapper.find('button').trigger('click')
        expect(wrapper.find('.text').text()).toBe('Hide issues')
    })
})