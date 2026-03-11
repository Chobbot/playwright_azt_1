// tests/learning/api/sending_api.spec.ts
import { test } from "@playwright/test";

test("GET Request", async ({ request }) => {
  await request.get("https://www.tredgate.cloud/courses");
});
/*
Cvičení - provolání API (⌛5:00)
Vytvořte nový test, který provolá GET request:

Složka: tests/exercises
Test: api_request_exercise.spec.ts
Url: https://www.tredgate.cloud/courses

Co nám API vrací?



Výzva
Vytvořte nový test, který provolá POST request:
Složka: tests/challenges
Test: api_request_challenge.spec.ts
Url: https://tegb-backend-877a0b063d29.herokuapp.com/auth/register
Body:
{
    "email": "luke@example.com",
    "password": "heslo1",
    "firstName": "Luke",
    "lastName": "Skywalker",
    "age": 25
}

*/

/*
Cvičení - request s body(⌛10:00)
Vytvořte nový test, který provolá POST request s body:
Složka: tests/exercises
Test: api_request_body_exercise.spec.ts
Url: https://tegb-backend-877a0b063d29.herokuapp.com/eshop/register
Metoda: POST
Body:
{
    "username": "Kristopher.Howe",
    "password": "123456",
    "email": "Addison_Emard@example.net"
}

Data pro body vygeneruj pomocí faker (pro username použij formát: name_intNumber).



Výzva
Na response ze cvičení vytvoř testy, zkontroluj:
Že v body se vrací stejné hodnoty username, email, jako jsme posílali v requestu

*/

import { faker } from "@faker-js/faker";

test("Exercise: Request with Body", async ({ request }) => {
  const username = faker.internet.username();

  await request.post(
    "https://tegb-backend-877a0b063d29.herokuapp.com/eshop/register",
    {
      data: {
        username,
        password: "123456",
        email: "Addison_Emard@example.net",
      },
    },
  );
});
