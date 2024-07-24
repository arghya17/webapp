import { render, screen } from "@testing-library/react";
import Login, { validateEmail } from "../navapp/Login";
import userEvent from "@testing-library/user-event";
describe("test the login component", () => {
	test("render the login component", async () => {
		render(<Login />);
		const buttonList = await screen.findAllByRole("button");
		expect(buttonList).toHaveLength(2);
	});
	test("check for email validation", () => {
		const email = "amar@mail.com";
		expect(validateEmail(email)).toBe(true);
	});
	test("check for email type", () => {
		render(<Login />);
		const email = screen.getByPlaceholderText("Enter email");
		userEvent.type(email, "admin@gmail.com");
		expect(email.value).toMatch("admin@gmail.com");
	});
	test("check password", () => {
		render(<Login />);
		const password = screen.getByPlaceholderText("Password");
		expect(password).toHaveAttribute("type", "password");
	});
});
