// tests/learning/api/api_objects.spec.ts

import { expect, test } from "@playwright/test";
import { faker } from "@faker-js/faker";
import { UserApi } from "../../../src/api/tegb/user_api.ts";

test("Register and Login with API Objects", async ({ request }) => {
  const username =
    faker.internet.username() + faker.number.int({ max: 1_000_000 });
  const password = faker.internet.password();
  const email = faker.internet.email();
  const api = new UserApi(request);
});
