import { mount } from '@vue/test-utils'
import SubmitButton from '@/components/SubmitButton.vue'

describe('SubmitButton.vue', () => {
  it("displays a non authorized message", () => {
    const msg = "submit"
    const wrapper = mount(SubmitButton, {
      propsData: {
        msg: msg
      }
    })

    // console.log(wrapper.html())

    expect(wrapper.find("span").text()).toBe("Not Authorized")
    expect(wrapper.find("button").text()).toBe("submit")
  })

  it("displays a admin privileges message", () => {
    const msg = "submit"
    const isAdmin = true
    const wrapper = mount(SubmitButton, {
      propsData: {
        msg,
        isAdmin
      }
    })

    // console.log(wrapper.html())

    expect(wrapper.find("span").text()).toBe("Admin Privileges")
    expect(wrapper.find("button").text()).toBe("submit")
  })
})