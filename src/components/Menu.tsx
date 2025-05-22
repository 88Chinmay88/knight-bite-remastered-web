
import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  popular?: boolean;
  spicy?: boolean;
  vegetarian?: boolean;
  glutenFree?: boolean;
}

interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}

const Menu = () => {
  const [categories] = useState<MenuCategory[]>([
    {
      id: "appetizers",
      name: "Appetizers",
      items: [
        {
          id: 1,
          name: "Royal Garlic Bread",
          description: "Freshly baked artisan bread infused with roasted garlic, herbs and parmesan cheese.",
          price: "$8",
          vegetarian: true,
        },
        {
          id: 2,
          name: "Castle Calamari",
          description: "Crispy fried calamari served with zesty marinara and lemon aioli.",
          price: "$12",
          popular: true,
        },
        {
          id: 3,
          name: "Knight's Bruschetta",
          description: "Toasted baguette topped with diced tomatoes, fresh basil, garlic, and olive oil.",
          price: "$9",
          vegetarian: true,
          glutenFree: true,
        },
        {
          id: 4,
          name: "Jousting Shrimp Cocktail",
          description: "Chilled jumbo shrimp served with our signature cocktail sauce.",
          price: "$14",
          glutenFree: true,
        },
      ]
    },
    {
      id: "mains",
      name: "Main Courses",
      items: [
        {
          id: 5,
          name: "Knight's Signature Steak",
          description: "Perfectly grilled 12oz ribeye with herb butter, served with roasted potatoes and seasonal vegetables.",
          price: "$32",
          popular: true,
          glutenFree: true,
        },
        {
          id: 6,
          name: "Royal Salmon",
          description: "Pan-seared Atlantic salmon with lemon dill sauce, served with wild rice and asparagus.",
          price: "$26",
          glutenFree: true,
        },
        {
          id: 7,
          name: "Medieval Mushroom Risotto",
          description: "Creamy arborio rice with wild mushrooms, truffle oil, and aged parmesan cheese.",
          price: "$22",
          vegetarian: true,
        },
        {
          id: 8,
          name: "King's Chicken Piccata",
          description: "Pan-seared chicken breast in lemon caper sauce, served with angel hair pasta.",
          price: "$24",
        },
      ]
    },
    {
      id: "desserts",
      name: "Desserts",
      items: [
        {
          id: 9,
          name: "Castle Chocolate Tower",
          description: "Decadent chocolate mousse layered with chocolate sponge cake and ganache.",
          price: "$10",
          vegetarian: true,
          popular: true,
        },
        {
          id: 10,
          name: "Knight's Crème Brûlée",
          description: "Classic vanilla bean custard with a caramelized sugar crust.",
          price: "$9",
          vegetarian: true,
          glutenFree: true,
        },
        {
          id: 11,
          name: "Royal Berry Trifle",
          description: "Fresh seasonal berries layered with mascarpone cream and ladyfingers.",
          price: "$8",
          vegetarian: true,
        },
        {
          id: 12,
          name: "Golden Apple Tart",
          description: "Warm apple tart with cinnamon, caramel sauce, and vanilla ice cream.",
          price: "$9",
          vegetarian: true,
        },
      ]
    },
    {
      id: "drinks",
      name: "Beverages",
      items: [
        {
          id: 13,
          name: "Knight's Elixir",
          description: "Our signature cocktail with premium vodka, elderflower, and citrus.",
          price: "$12",
        },
        {
          id: 14,
          name: "Castle Reserve Wine",
          description: "Selection of premium red and white wines from our cellar.",
          price: "$10-15",
          glutenFree: true,
        },
        {
          id: 15,
          name: "Royal Tea Selection",
          description: "Assortment of fine loose leaf teas from around the world.",
          price: "$5",
          vegetarian: true,
          glutenFree: true,
        },
        {
          id: 16,
          name: "Artisan Coffee",
          description: "Freshly brewed specialty coffee, served with house-made biscotti.",
          price: "$4",
          vegetarian: true,
          glutenFree: true,
        },
      ]
    },
  ]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="menu" className="py-20 menu-pattern">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-heading">Our Menu</h2>
          <p className="mt-4 text-knight-black/70 max-w-2xl mx-auto">
            Explore our carefully curated selection of dishes, prepared with the finest ingredients and culinary expertise.
          </p>
        </div>

        <Tabs defaultValue="appetizers" className="max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
            {categories.map((category) => (
              <TabsTrigger 
                key={category.id}
                value={category.id}
                className="font-serif data-[state=active]:bg-knight-red data-[state=active]:text-white"
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="bg-white p-6 rounded-lg shadow-md border border-knight-gold/10">
              <h3 className="font-serif text-2xl font-bold text-knight-black mb-6 text-center">
                {category.name}
              </h3>
              <div className="space-y-4">
                {category.items.map((item) => (
                  <div key={item.id} className="menu-item">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-serif text-xl font-bold text-knight-black flex items-center">
                        {item.name}
                        {item.popular && (
                          <span className="ml-2 bg-knight-gold text-white text-xs py-1 px-2 rounded-full">
                            Popular
                          </span>
                        )}
                      </h4>
                      <span className="font-serif text-lg font-bold text-knight-red">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-knight-black/70 mb-2">
                      {item.description}
                    </p>
                    <div className="flex gap-2 text-xs">
                      {item.vegetarian && (
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded">
                          Vegetarian
                        </span>
                      )}
                      {item.spicy && (
                        <span className="bg-red-100 text-red-800 px-2 py-1 rounded">
                          Spicy
                        </span>
                      )}
                      {item.glutenFree && (
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                          Gluten-Free
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="text-center mt-12">
          <p className="mb-4 text-knight-black/70">
            Please inform your server of any allergies or dietary restrictions.
          </p>
          <Button 
            onClick={() => scrollToSection('reservation')}
            className="bg-knight-gold hover:bg-knight-gold/80 text-knight-black"
          >
            Reserve a Table
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Menu;
