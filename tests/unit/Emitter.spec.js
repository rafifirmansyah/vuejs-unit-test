import Emitter from "@/components/Emitter.vue"
import { mount } from "@vue/test-utils"

describe("Emitter", () => {
  it("emits an event with two arguments", () => {
    const wrapper = mount(Emitter)

    wrapper.vm.emitEvent()

    expect(wrapper.emitted().myEvent[0]).toEqual(["name", "password"])
  })

  it("emits an event without mouting the component", () => {
    const events = {}
    const $emit = (event, ...args) => { events[event] = [...args] }
    console.log(events)
    Emitter.methods.emitEvent.call({ $emit })
    console.log(events)
    expect(events.myEvent).toEqual(["name", "password"])
  })
}) 