export function getRenderData() {

    const result = [];
    const items = [];
    menuItems.forEach(item => items.push({id: item.id, title: item.title, menu: item.menu, type: "menu-item"}))
    menus.forEach(item => result.push({id: item.id, title: item.title, type: "menu", items: items.filter(x => x.menu === item.id)}));
    return result;
}

const menuItems = [
    {
        id: 0,
        title: "Johan",
        menu: 0,
        dataTitle: "people"
    },
    {
        id: 1,
        title: "Gerhard",
        menu: 0,
        dataTitle: "people"
    },
    {
        id: 2,
        title: "Barend",
        menu: 0,
        dataTitle: "people"
    },
    {
        id: 3,
        title: "Ashton",
        menu: 0,
        dataTitle: "people"
    },
    {
        id: 4,
        title: "Keiran",
        menu: 0,
        dataTitle: "people"
    },
    {
        id: 5,
        title: "Monkey",
        menu: 1,
        dataTitle: "animals"
    },
    {
        id: 6,
        title: "Cat",
        menu: 1,
        dataTitle: "animals"
    },
    {
        id: 7,
        title: "Dog",
        menu: 1,
        dataTitle: "animals"
    },
    {
        id: 8,
        title: "Cow",
        menu: 1,
        dataTitle: "animals"
    },
    {
        id: 9,
        title: "Lion",
        menu: 1,
        dataTitle: "animals"
    },
    {
        id: 10,
        title: "Shanaaz",
        menu: 0,
        dataTitle: "people"
    }
];

const menus = [
    {
        id: 0,
        title: "People",
        dataTitle: "people"

    },
    {
        id: 1,
        title: "Animals",
        dataTitle: "animals"

    }
];