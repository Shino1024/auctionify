<template>
    
</template>

<script>
    export default {
        name: "MainView",
        props: [
            'userName',
            'auctionsPage'
        ]
    }
</script>

<style lang="scss" scoped>
    @import '../scss/responsive';

    body {
        @include sm {
            padding: 10px;
        }

        @include md {
            padding: 20px;
        }

        @include lg {
            padding: 30px;
        }

        @include xl {
            padding: 50px;
        }

        header {
            //
        }

        main {
            //
        }

        footer {
            //
        }
    }
</style>