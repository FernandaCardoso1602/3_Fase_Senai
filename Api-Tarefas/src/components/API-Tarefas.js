// requerer/chamar o express e o body-parser
const bodyParser = require("body-parser");
const express = require("express")

//inicializar o app
const app = express()
const PORT = 3000;

app.use(bodyParser.json())

let tarefas = [
    { id: 1, descricao: "Estudar NodeJs" },
    { id: 2, descricao: "Fazer uma API" }
];

// Listar todas as tarefas
app.get('/tarefas', (req, res) => {
    res.json(tarefas);
});

// Criar uma nova tarefa
app.post('/tarefas', (req, res) => {
    const { descricao } = req.body;
    if (!descricao) { // !: negação, diferente de 
        return res.status(400).json({ error: "Adicione uma descrição (Ação Obrigatória): " });
    }
    const novaTarefa = { id: tarefas.length + 1, descricao };
    tarefas.push(novaTarefa);
    res.status(201).json(novaTarefa);
});

// Editar uma tarefa
app.put('/tarefas/:id', (req, res) => {
    const { id } = req.params;
    const { descricao } = req.body;
    const tarefa = tarefas.find(t => t.id == id);
    if (!tarefa) {
        return res.status(404).json({ error: "Tarefa não encontrada" });
    }
    tarefa.descricao = descricao || tarefa.descricao;
    res.json(tarefa);
});

// Deletar uma tarefa
app.delete('/tarefas/:id', (req, res) => {
    const { id } = req.params;
    tarefas = tarefas.filter(t => t.id != id);
    res.json({ message: "Tarefa removida com sucesso" });
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log('Servidor rodando na porta ${PORT}');
});