import { describe, expect, test } from "vitest";

const mockAction = {
  data: {
    totalHeroes: 10,
    strongestHero: {
      id: "1",
      name: "Superman",
      slug: "superman",
      alias: "Clark Kent",
      powers: ["super strength", "flight"],
      description: "Man of Steel",
      strength: 100,
      intelligence: 85,
      speed: 95,
      durability: 100,
      team: "Justice League",
      image: "superman.jpg",
      firstAppearance: "1938",
      status: "active",
      category: "hero",
      universe: "DC",
    },
    smartestHero: {
      id: "2",
      name: "Batman",
      slug: "batman",
      alias: "Bruce Wayne",
      powers: ["intelligence", "wealth"],
      description: "Dark Knight",
      strength: 70,
      intelligence: 100,
      speed: 75,
      durability: 80,
      team: "Justice League",
      image: "batman.jpg",
      firstAppearance: "1939",
      status: "active",
      category: "hero",
      universe: "DC",
    },
    heroCount: 8,
    villainCount: 2,
  },
};

describe("getSummaryAction", () => {
  test("should fetch summary and return complete information", async () => {
    const summary = await mockAction.data;

    expect(summary).toStrictEqual({
      totalHeroes: expect.any(Number),
      strongestHero: {
        id: expect.any(String),
        name: expect.any(String),
        slug: expect.any(String),
        alias: expect.any(String),
        powers: expect.any(Array),
        description: expect.any(String),
        strength: expect.any(Number),
        intelligence: expect.any(Number),
        speed: expect.any(Number),
        durability: expect.any(Number),
        team: expect.any(String),
        image: expect.any(String),
        firstAppearance: expect.any(String),
        status: expect.any(String),
        category: expect.any(String),
        universe: expect.any(String),
      },
      smartestHero: {
        id: expect.any(String),
        name: expect.any(String),
        slug: expect.any(String),
        alias: expect.any(String),
        powers: expect.any(Array),
        description: expect.any(String),
        strength: expect.any(Number),
        intelligence: expect.any(Number),
        speed: expect.any(Number),
        durability: expect.any(Number),
        team: expect.any(String),
        image: expect.any(String),
        firstAppearance: expect.any(String),
        status: expect.any(String),
        category: expect.any(String),
        universe: expect.any(String),
      },
      heroCount: expect.any(Number),
      villainCount: expect.any(Number),
    });
  });
});
