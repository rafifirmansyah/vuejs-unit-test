import { mount } from "@vue/test-utils"
import '@testing-library/jest-dom'
import Parent from "@/components/Parent.vue"
import ParentWithManyChildren from "@/components/ParentWithManyChildren.vue";
import Child from "@/components/Child.vue"

describe("Parent", () => {
  it("does not render a span", () =>{
    const wrapper = mount(Parent)

    expect(wrapper.find("span").element).not.toBeVisible()
  })

  it("does render a span", () => {
    const wrapper = mount(Parent, {
      data() {
        return { showSpan: true }
      }
    })

    expect(wrapper.find("span").element).toBeVisible()
  })

  it("renders many children", () => {
    const wrapper = mount(ParentWithManyChildren)

    expect(wrapper.findAllComponents(Child).length).toBe(3)
  })
})