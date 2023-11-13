

/* Document used to setup this tests
https://codingwithmanny.medium.com/quick-vitest-setup-with-vitejs-react-typescript-bea9d3a01b07
*/

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import App from '../App';

describe('Renders main page correctly', async () => {

	it('Should render the page correctly', async () => {
		render(<App />);
		const h1 = await screen.queryByText('Shopping App');

		// Expectations
		expect(h1).toBeDefined()
	});


	it("should add the product to the 'cart' when pressing the 'add to the cart' button", async () => {
		render(<App />);

		const user = userEvent.setup();

		const addToCartButtons = await screen.findAllByRole("button", {
			name: /add to cart/i,
		});
		await user.click(addToCartButtons[0]);

		const showCartButton = await screen.getByRole("checkbox", {
			name: /show cart/i,
		});
		await user.click(showCartButton);

		// const quantity = screen.getByText( /quantity/i )

		const removeFromCartButton = screen.findByRole("button", { name: /remove from cart/i })

		expect(removeFromCartButton).not.toBeNull();


	});
});

