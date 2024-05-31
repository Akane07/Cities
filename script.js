const city = {
 "а": ["Абакан", "Азов", "Александров", "Алексин", "Альметьевск", "Анапа", "Ангарск", "Анжеро-Судженск", "Апатиты", "Арзамас", "Армавир", "Арсеньев", "Артем", "Архангельск", "Асбест", "Астрахань", "Ачинск"],
 "б": ["Балаково", "Балахна", "Балашиха", "Балашов", "Барнаул", "Батайск", "Белгород", "Белебей", "Белово", "Белогорск", "Белорецк", "Белореченск", "Бердск", "Березники", "Березовский", "Бийск", "Биробиджан", "Благовещенск", "Бор", "Борисоглебск", "Боровичи", "Братск", "Брянск", "Бугульма", "Буденновск", "Бузулук", "Буйнакск"],
 "в": ["Великие Луки", "Великий Новгород", "Верхняя Пышма", "Видное", "Владивосток", "Владикавказ", "Владимир", "Волгоград", "Волгодонск", "Волжск", "Волжский", "Вологда", "Вольск", "Воркута", "Воронеж", "Воскресенск", "Воткинск", "Всеволожск", "Выборг", "Выкса", "Вязьма"],
 "г": ["Гатчина", "Геленджик", "Георгиевск", "Глазов", "Горно-Алтайск", "Грозный", "Губкин", "Гудермес", "Гуково", "Гусь-Хрустальный"],
 "д": ["Дербент", "Дзержинск", "Димитровград", "Дмитров", "Долгопрудный", "Домодедово", "Донской", "Дубна"],
 "е": ["Евпатория", "Егорьевск", "Ейск", "Екатеринбург", "Елабуга", "Елец", "Ессентуки"],
 "ё": ["Пусто"],
 "ж": ["Железногорск", "Железногорск", "Жигулевск", "Жуковский"],
 "з": ["Заречный", "Зеленогорск", "Зеленодольск", "Златоуст"],
 "и": ["Иваново", "Ивантеевка", "Ижевск", "Избербаш", "Иркутск", "Искитим", "Ишим", "Ишимбай", "Йошкар-Ола"],
 "й": ["Йошкар-Ола"],
 "к": ["Казань", "Калининград", "Калуга", "Каменск-Уральский", "Каменск-Шахтинский", "Камышин", "Канск", "Каспийск", "Кемерово", "Керчь", "Кинешма", "Кириши", "Киров", "Кирово-Чепецк", "Киселевск", "Кисловодск", "Клин", "Клинцы", "Ковров", "Когалым", "Коломна", "Комсомольск-на-Амуре", "Копейск", "Королев", "Кострома", "Котлас", "Красногорск", "Краснодар", "Краснокаменск", "Краснокамск", "Краснотурьинск", "Красноярск", "Кропоткин", "Крымск", "Кстово", "Кузнецк", "Кумертау", "Кунгур", "Курган", "Курск", "Кызыл"],
 "л": ["Лабинск", "Лениногорск", "Ленинск-Кузнецкий", "Лесосибирск", "Липецк", "Лиски", "Лобня", "Лысьва", "Лыткарино", "Люберцы"],
 "м": ["Магадан", "Магнитогорск", "Майкоп", "Махачкала", "Междуреченск", "Мелеуз", "Миасс", "Минеральные Воды", "Минусинск", "Михайловка", "Михайловск", "Мичуринск", "Москва", "Мурманск", "Муром", "Мытищи"],
 "н": ["Набережные Челны", "Назарово", "Назрань", "Нальчик", "Наро-Фоминск", "Находка", "Невинномысск", "Нерюнгри", "Нефтекамск", "Нефтеюганск", "Нижневартовск", "Нижнекамск", "Нижний Новгород", "Нижний Тагил", "Новоалтайск", "Новокузнецк", "Новокуйбышевск", "Новомосковск", "Новороссийск", "Новосибирск", "Новотроицк", "Новоуральск", "Новочебоксарск", "Новочеркасск", "Новошахтинск", "Новый Уренгой", "Ногинск", "Норильск", "Ноябрьск", "Нягань"],
 "о": ["Обнинск", "Одинцово", "Озерск", "Октябрьский", "Омск", "Орел", "Оренбург", "Орехово-Зуево", "Орск"],
 "п": ["Павлово", "Павловский Посад", "Пенза", "Первоуральск", "Пермь", "Петрозаводск", "Петропавловск-Камчатский", "Подольск", "Полевской", "Прокопьевск", "Прохладный", "Псков", "Пушкино", "Пятигорск"],
 "р": ["Раменское", "Ревда", "Реутов", "Ржев", "Рославль", "Россошь", "Ростов-на-Дону", "Рубцовск", "Рыбинск", "Рязань"],
 "с": ["Салават", "Сальск", "Самара", "Санкт-Петербург", "Саранск", "Сарапул", "Саратов", "Саров", "Свободный", "Севастополь", "Северодвинск", "Северск", "Сергиев Посад", "Серов", "Серпухов", "Сертолово", "Сибай", "Симферополь", "Славянск-на-Кубани", "Смоленск", "Соликамск", "Солнечногорск", "Сосновый Бор", "Сочи", "Ставрополь", "Старый Оскол", "Стерлитамак", "Ступино", "Сургут", "Сызрань", "Сыктывкар"],
 "т": ["Таганрог", "Тамбов", "Тверь", "Тимашевск", "Тихвин", "Тихорецк", "Тобольск", "Тольятти", "Томск", "Троицк", "Туапсе", "Туймазы", "Тула", "Тюмень"],
 "у": ["Узловая", "Улан-Удэ", "Ульяновск", "Урус-Мартан", "Усолье-Сибирское", "Уссурийск", "Усть-Илимск", "Уфа", "Ухта"],
 "ф": ["Феодосия", "Фрязино"],
 "х": ["Хабаровск", "Ханты-Мансийск", "Хасавюрт", "Химки"],
 "ц": ["Цслова"],
 "ч": ["Чайковский", "Чапаевск", "Чебоксары", "Челябинск", "Черемхово", "Череповец", "Черкесск", "Черногорск", "Чехов", "Чистополь", "Чита"],
 "ш": ["Шадринск", "Шали", "Шахты", "Шуя"],
 "щ": ["Щекино", "Щелково"],
 "ъ": ["ъслова"],
 "ы": ["ыслова"],
 "ь": ["ьслова"],
 "э": ["Электросталь", "Элиста", "Энгельс"],
 "ю": ["Южно-Сахалинск", "Юрга"],
 "я": ["Якутск", "Ялта", "Ярославль"]
};
const letter = ["а", "б", "в", "г", "д", "е", "ж", "з", "и", "к", "л", "м", "н", "о", "п", "р", "с", "т", "у", "ф", "х", "ч", "ш", "ш", "э", "ю", "я"];


const set = []
let count = 0
let lastLetter

for (prop in city) {
    count += city[prop].length
}


while (set.length < count) {
    let myCity = prompt('Введите город:')
    let firstLetter = myCity.split('')[0].toLowerCase()
    let countWord = 0

    while (set.includes(myCity) || !city[firstLetter].includes(myCity)) {
        if (city[firstLetter].includes(myCity)) {
            countWord += 1
            if (countWord == city[firstLetter].length) {
                break
            }
        }
        myCity = prompt('Введите другой город:')
        firstLetter = myCity.split('')[0].toLowerCase()
    }
    if (countWord == city[firstLetter].length) {
        alert('Вы проиграли')
        break
    }
    set.push(myCity)
    
    lastLetter = myCity.split('').at(-1)
    
    let countCity = Infinity
    let lenWord = 1
    while (countCity > city[lastLetter].length - 1) {
        countCity = 0
        for (prop in city[lastLetter]) {
            if (set.includes(city[lastLetter][prop])) {
                countCity += 1
            }
        }
        if (countCity < city[lastLetter].length - 1) {
            countCity = 0
        } else {
            countCity = Infinity
            lastLetter = myCity.split('')[myCity.split('').indexOf(lastLetter) - 1]
            lenWord += 1
        }
        if (lenWord == myCity.length) {
            break
        }
    }
    if (lenWord == myCity.length) {
        alert("Вы победили")
        break
    }

    let lenLetter = city[lastLetter].length - 1
    let newCity = city[lastLetter][Math.floor(Math.random() * lenLetter)]
    
    while (set.includes(newCity)) {
        newCity = city[lastLetter][Math.floor(Math.random() * lenLetter)]
    }
    let newCityLetter = newCity.split('').at(-1)
    set.push(newCity)
    alert(`${newCity}, вам на ${newCityLetter}`)
    
}


