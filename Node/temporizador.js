// Temporizado com node-schedule
// node-schedule serve para fazer agendamento de tarefas npm install node-schedule

const schedule = require('node-schedule')

// ('segundos * hora * mes * dia')
const tarefa1 = schedule.scheduleJob('*/5 * 00 * * 7', function() {
    console.log('Executando tarefa 1: ', new Date().getSeconds())
})

setTimeout(function(){
    tarefa1.cancel()
    console.log('Cancelando a tarefa1')
}, 20000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(0, 6)]
regra.hour = 00
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log('Executando tarefa 2: ', new Date().getSeconds())
})