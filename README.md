# WEBPACK

ссылка на youtube
https://youtu.be/o8KMucDpSno

Для установки пакетов используйте команду npm install

## Команды

### Запуск сервера для разработки
```shell
npm run start
```

### Сборка проекта без оптимизации
```shell
npm run build-dev
```

### Сборка проекта с оптимизацией
```shell
npm run build-prod
```

### Очистка папки dist
```shell
npm run clear
```
## Команды для Docker

### Создание контенера
docker build --tag diplom .

### Создание контенера
docker run -it --publish 3000:3000 diplom sh
после запуска контенера попадаете в интерактивный терминал.
#### Запуск сервера
npm start
