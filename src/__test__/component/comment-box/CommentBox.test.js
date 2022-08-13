const { default: CommentBox } = require("components/comment-box/CommentBox");
const { shallow } = require("enzyme");

let wrapper;
beforeEach(() => {
  wrapper = shallow(<CommentBox />);
});

it("render input text field and button in comment box component", () => {
  expect(wrapper.find("input").length).toEqual(1);
  expect(wrapper.find("button").length).toEqual(1);
  expect(wrapper.find("form").length).toEqual(1);
});

it("has comment in text field", () => {
  wrapper.find("input").simulate("change", {
    target: { value: "the comment" },
  });

  wrapper.update();

  expect(wrapper.find("input").prop("value")).toEqual("the comment");
});

it("has empty comment after submit", () => {
  wrapper.find("input").simulate("change", {
    target: { value: "this is new Comment...." },
  });
  wrapper.update();

  expect(wrapper.find("input").prop("value")).toEqual(
    "this is new Comment...."
  );
  wrapper.find("form").simulate("submit");
  wrapper.update();
  expect(wrapper.find("input").prop("value")).toEqual("");
});
