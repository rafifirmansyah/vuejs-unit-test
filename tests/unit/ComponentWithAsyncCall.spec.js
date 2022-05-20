import { shallowMount, mount } from "@vue/test-utils";
import ParentWithAPICallChild from "@/components/ParentWithAPICallChild.vue"
import ComponentWithAsyncCall from "@/components/ComponentWithAsyncCall.vue"

describe('ParentWithAPICallChild.vue', () => {
  it("renders with mount and does initialize API Call", () => {
    const wrapper = mount(ParentWithAPICallChild, {
      stubs: {
        ComponentWithAsyncCall: true
        // ComponentWithAsyncCall: "<div class='stub'></div>"
      }
    })
    console.log(wrapper.html())
    expect(wrapper.findComponent(ComponentWithAsyncCall).exists()).toBe(true)
  })

  it('renders with shallowMount and does not initialize API Call', () => {
    const wrapper = shallowMount(ParentWithAPICallChild)

    expect(wrapper.findComponent(ComponentWithAsyncCall).exists()).toBe(true)
  })
})