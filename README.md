# 🎉 XXII FESTA DA APEOC - CAMOCIM 2025

Uma página web animada e interativa para a 22ª edição da Festa da APEOC, celebrando em Camocim no ano de 2025.

## ✨ Características

### 🎨 Design Visual
- **Tema Disco Club**: Ambiente inspirado em clubes noturnos profissionais
- **Animações Dinâmicas**: Múltiplas camadas de efeitos visuais
- **Spotlights de Alta Velocidade**: Feixes de luz saindo do chão e movendo-se rapidamente
- **Disco Ball Animado**: GIF animado central como elemento principal
- **Fonte Personalizada**: Monoton - estilo industrial e futurista

### 🚀 Efeitos Especiais
- **12 Spotlights Verticais**: Feixes de luz saindo do chão em direção ao teto
- **8 Feixes Horizontais**: Varredura horizontal em alta velocidade
- **6 Cone Lights**: Holofotes de piso com formato de cone
- **Luzes Rotativas**: 4 feixes principais girando em velocidades diferentes
- **30 Pontos de Luz**: Luzes piscantes aleatórias
- **Silhuetas Animadas**: Pessoas dançando no fundo

### 🎭 Animações
- **Alta Velocidade**: Todas as animações otimizadas para máxima energia
- **Sincronização**: Timing preciso para efeitos coordenados
- **Loop Infinito**: Animações contínuas sem interrupções
- **Interatividade**: Efeitos de hover e transições suaves

## 🛠️ Tecnologias Utilizadas

- **Next.js 15**: Framework React com App Router
- **TypeScript**: Tipagem estática para maior robustez
- **Tailwind CSS**: Estilização utilitária e responsiva
- **Framer Motion**: Biblioteca de animações avançadas
- **Google Fonts**: Fonte Monoton para impacto visual
- **CSS3**: Efeitos de blur, gradientes e transformações

## 🎯 Estrutura do Projeto

```
src/
├── app/
│   ├── globals.css      # Estilos globais e variáveis CSS
│   ├── layout.tsx       # Layout principal com configuração de fontes
│   └── page.tsx         # Página principal com todas as animações
└── components/
    └── ui/              # Componentes UI reutilizáveis
```

## 🌟 Principais Elementos

### Título Principal
- **XXII FESTA DA APEOC**: Título grande com fonte Monoton
- **CAMOCIM - 2025**: Local e data do evento
- **SEJAM BEM VINDOS!**: Mensagem de boas-vindas animada

### Sistema de Iluminação
- **Spotlights Verticais**: Animação de 0.8-1.2 segundos
- **Feixes Horizontais**: Movimento de 1.5-2 segundos
- **Cone Lights**: Animação ultra rápida de 0.6-0.9 segundos
- **Luzes Rotativas**: Duração de 5-8 segundos por rotação

### Elementos Visuais
- **Disco Ball GIF**: Elemento central com animação própria
- **Grade Espelhada**: Efeito de piso de clube noturno
- **Silhuetas**: 8 figuras dançantes animadas
- **Gradientes**: Múltiplas camadas de cores vibrantes

## 🎨 Paleta de Cores

- **Vermelho (#FF0080)**: Energia e paixão
- **Verde (#00FF88)**: Vitalidade e diversão
- **Azul (#00D4FF)**: Tecnologia e modernidade
- **Dourado (#FFD700)**: Celebração e prestígio
- **Rosa (#FF1493)**: Festividade e alegria
- **Ciano (#00CED1)**: Frescor e inovação

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ instalado
- npm ou yarn

### Instalação
```bash
# Clonar o repositório
git clone https://github.com/eirocha/animacaoapeoc.git

# Entrar no diretório
cd animacaoapeoc

# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm run dev
```

### Acesso
Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 📱 Responsividade

O projeto é totalmente responsivo e se adapta a diferentes tamanhos de tela:
- **Mobile**: Layout otimizado para telas pequenas
- **Tablet**: Ajustes intermediários para iPads e similares
- **Desktop**: Experiência completa em telas grandes

## 🎭 Performance

- **Otimização de Animações**: Uso eficiente de transformações CSS
- **Lazy Loading**: Carregamento otimizado de recursos
- **Componentização**: Código modular e reutilizável
- **Build Otimizado**: Compilação para produção com Next.js

## 🔧 Personalização

### Cores
Modifique as variáveis de cor em `src/app/globals.css`:

```css
:root {
  --cor-primaria: #FF0080;
  --cor-secundaria: #00FF88;
  /* ... */
}
```

### Velocidade das Animações
Ajuste as durações em `src/app/page.tsx`:

```javascript
transition={{
  duration: 1.5, // Altere este valor
  repeat: Infinity,
}}
```

### Textos
Edite os textos diretamente nos componentes `motion.h1`, `motion.div` em `src/app/page.tsx`.

## 📄 Licença

Este projeto está licenciado sob a MIT License.

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

## 📞 Contato

- **Evento**: XXII FESTA DA APEOC
- **Local**: Camocim
- **Ano**: 2025
- **Desenvolvimento**: Página web animada para celebração

---

🎊 **Aproveite a festa e divirta-se com nossa animação interativa!** 🎊