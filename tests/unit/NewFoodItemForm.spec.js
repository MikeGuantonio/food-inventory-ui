import { mount } from "@vue/test-utils";
import NewFoodItemForm from "@/components/NewFoodItemForm";

describe("New Food Item Form", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(NewFoodItemForm);
  });

  describe("clicking the send button", () => {
    beforeEach(() => {
      wrapper.find('[data-test="foodName"]').setValue("Cereal");
      wrapper.find('[data-test="createButton"]').trigger("click");
    });

    it("should clear the food name text field", () => {
      const { element } = wrapper.find('[data-test="foodName"]');
      expect(element.value).toEqual("");
    });

    it("should emit a message to the list listener", () => {
      expect(wrapper.emitted().send[0]).toEqual(["Cereal"]);
    });
  });
});
