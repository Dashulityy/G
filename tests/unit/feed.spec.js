import { mount } from "@vue/test-utils"
import { feed } from "@/components/feed"

describe("feed", () => {
    it("при клике выполняется запрос к серверу", async () => {
        const wrapper = mount(feed)
        await wrapper.find('.toggler button').trigger('click')
        expect(wrapper.emitted().loadContent.length).toBe(1)
    })
    it("количество выведенных элементов равно количеству пришедших элементов", async () => {
        const issue = {
            title: 'test-title',
            user: { login: 'test-name' }
        }
        const wrapper = mount(feed, {
            propsData: {
                issues: Array.from({ length: 6 }).map(x => issue)
            }
        })
        expect(wrapper.find('.comments-list').exists()).toBe(false)
        await wrapper.find('.toggler button').trigger('click')
        expect(wrapper.findAll('.comments__item').length).toBe(6)        
    })
    it("нет повторных событий, если данные уже были переданы", async () => {
        const issue = {
            title: 'test-title',
            user: { login: 'test-name' }
        }
        const wrapper = mount(feed, {
            propsData: {
                issues: Array.from({ length: 6 }).map(x => issue)
            }
        })
        await wrapper.find('.toggler button').trigger('click')
        expect(wrapper.emitted().loadContent).toBeUndefined()
    })
})