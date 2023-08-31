To speed things up this project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

### `npm test`

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## FastSpring Effects Lab

This project was built in order to test the SBL (Store Builder Library), APIs and Webhooks.

The webshop includes simple functionality based on the productId.

Every content will be displayed depending on the productId. All directives will point towards that productId once defined in the component ProductCard.
This could have also be done using state management via the `https://api.fastspring.com/products/` API. I wanted to test first SBL directives in React so I hardcoded them in the Grid component. I will do this.

## Order Processing Flow - webhook implementation logic for React

1. **Order Completed Event**: order.completed sends the corresponding response to the server endpoint using ngrok to expose it publicly.

2. **Server Logic**: The server endpoint handles the incoming request and executes custom logic.

3. **Populating `db.json`**:

   - Check if the customer account (identified by its `id`) exists in the `db.json` database.
   - If the account is not found, add `customerInfo` and an array of `orderId` to the account's data.

4. **Thank You Page & URL Parameter**:

   - After closing the order popup, users are automatically redirected to the thank you page.
   - The URL contains the `orderId` parameter.

5. **Handling URL Parameters**:

   - During component mount, extract the `orderId` parameter from the URL using the `URLSearchParams` method within a `useEffect` hook.

6. **API Call for Email Retrieval**:

   - Make an API call to `api/get-email/${orderId}` to check if the user is registered in the database.
   - A response is returned only if the user does not have an associated password (indicating no account creation).

7. **Conditional Rendering**:

   - Based on the absence of a password, conditionally render the "Create Account" button on the thank you page.

8. **Create Account Link**:

   - Clicking the "Create Account" link takes the user to the `/create-account` page.
   - The URL includes the parameters `accountId` and `email` for pre-filling the form.

9. **Create Account Component**:

   - The `CreateAccount` component receives `accountId` and `email` information from the URL.
   - The email field is disabled when an email is provided in the URL.

10. **Submitting Account Creation**:
    - Upon submission, the password is sent via a POST request to `api/create-account`.
    - The password is associated with the `accountId.customerInfo` data for the respective user.

Feel free to reach out if you have any questions or need further assistance!
