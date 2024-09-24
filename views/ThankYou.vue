<template>
    <header>
        <h1>Thank you for your selection. Your Pokemon will be delivered soon.</h1>
        <RouterLink to="/">
         <button class="btn-red">Go Home</button>
      </RouterLink>
    </header>
</template>
  
<style scoped>
h1 {
    color: var(--color-text);
    margin-bottom: 16px;
}

header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.btn-red {
   color: #fff;
   background-color: #cc0000;
   font-weight: bold;
   border: 0px;
   border-radius: 4px;
   padding: 10px 20px;
}
</style>