<template>
    <div class="auction-view">
        <img class="auction-view-img" v-bind:src="auctionImgSrc" alt="Auction picture" />
        <div class="auction-view-text">
            <span class="auction-view-text-id">{{auctionId}}</span>
            <span class="auction-view-text-title">{{auctionTitle}}</span>
            <span class="auction-view-text-creator">{{auctionCreator}}</span>
            <div class="auction=-view-text-description"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AuctionView",
        props: [
            'auctionId',
            'auctionImgSrc',
            'auctionTitle',
            'auctionCreator',
            'auctionDescription'
        ],
        data: function() {
            return {
                //
            }
        }
    }
</script>

<style lang="scss" scoped>
    .auction-view {
        height: 250vh;
        padding: 25px;
        border: 1px solid rgba(0, 0, 0, .5);
        border-radius: 20px;
        background-color: #CCE3DE;

        .auction-view-img {
            width: 200vw;
            height: 200vh;
        }

        .auction-view-text {
            min-width: 300vw;
            max-width: 500vw;

            .auction

            .auction-view-text-title {
                font: 20px bold Georgia, serif;
                width: 100%;
            }

            .auction-view-text-creator {
                font: 17px bold small-caps Georgia;
                width: 100%;
            }

            .auction-view-text-description {
                font: 15px italic Georgia;
                width: 100%;
            }
        }
    }
</style>