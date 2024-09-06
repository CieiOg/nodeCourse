const fs = require('fs')

// Adiciona conteúdo extra a um arquivo existente
fs.appendFile('file.txt', '\n conteúdo extra', (erro) => {
    if (erro) {
        console.error('Erro ao adicionar conteúdo:', erro);
    } else {
        console.log('Conteúdo adicionado com sucesso!');
    }
});

// RENOMEAR ARQUIVO EXISTENTE
fs.rename('file.txt', 'novo_nome.txt', (erro) => {
    if (erro) {
        console.error('Erro ao renomear o arquivo:', erro);
    } else {
        console.log('Arquivo renomeado com sucesso!');
    }
});

// EXCLUIR ARQUIVO EXISTENTE (UNLINK)
fs.unlink('novo_nome.txt', (erro) => {
    if (erro) {
        console.error('Erro ao excluir o arquivo:', erro);
    } else {
        console.log('Arquivo excluído com sucesso!');
    }
});

// MOSTRAR O DIRETÓRIO ATUAL (__dirname)
console.log('Diretório atual:', __dirname);
