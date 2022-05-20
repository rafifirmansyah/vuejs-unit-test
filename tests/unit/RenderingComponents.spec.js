import { mount, shallowMount } from '@vue/test-utils'
import Vue from 'vue'

describe('Rendering Components', () => {
  it('render components...', () => {
    const Child = Vue.component("Child", {
      name: "Child",
      template: "<div>Child component</div>"
    })

    const Parent = Vue.component("Parent", {
      name: "Parent",
      template: "<div><child /></div>"
    })

    const shallowWrapper = shallowMount(Parent)
    const mountWrapper = mount(Parent)

    // console.log(shallowWrapper.html())
    // console.log(mountWrapper.html())
  })
})