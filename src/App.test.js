import { render, screen } from "@testing-library/react";
import { mount } from "enzyme";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/createStore";
import toJson from "enzyme-to-json";

test("renders learn react link", async () => {
  const wrapper = await mount(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(toJson(wrapper)).toMatchSnapshot();
});

test("contains app-wrapper", async () => {
  const wrapper = await mount(
    <Provider store={store}>
      <App />
    </Provider>
  );
  let appWrapper = wrapper.find("#app-wrapper");
  expect(appWrapper.first().exists()).toBe(true);
});

// render(<App />);
// const linkElement = screen.getByText(/learn react/i);
// expect(linkElement).toBeInTheDocument();
