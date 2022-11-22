<template>
    <ul class="pagging">
        <li 
            v-for="pageNumber in totalPages" 
            :key="pageNumber" 
            class="pagging__item" 
            :class="{'_active': page === pageNumber}"
            @click="changePage(pageNumber)"
        >
            {{pageNumber}}
        </li>
    </ul>
</template>

<script>
    export default {
        props: {
            page: {
                type: Number,
                required: true,
            },
            totalPages: {
                type: Number,
                required: true,
            },
            changePage: {
                type: Function,
                required: true,
            }
        },
    }
</script>

<style scoped>
  .pagging {
        display: flex;
        gap: 10px;
        align-items: center;
        list-style: none;
    }

    .pagging__item {
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 0 0 40px;
        cursor: pointer;
        border: 1px solid #000;
        padding: 10px;
    }

    .pagging__item._active {
        background-color: antiquewhite;
    }
</style>