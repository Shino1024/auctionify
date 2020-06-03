<template>
    <header class="auctionify-header">
        //
    </header>

    <ul>
        <li>abc</li>
        <li>abc</li>
        <li>abc</li>
        <li>abc</li>
        <li>abc</li>
    </ul>

    <AllAuctionsView>
        <!---->
    </AllAuctionsView>

    <footer class="auctionify-footer">
        //
    </footer>
</template>

<script>
    import AllAuctionsView from "./component/AllAuctionsView";
    import AuctionView from "./component/AuctionView";
    import ChatView from "./component/ChatView";
    import ChatsView from "./component/ChatsView";
    import MainView from "./component/MainView";
    import ProfileView from "./component/ProfileView";
    import UserAuctionsView from "./component/UserAuctionsView";

    export default {
        name: "App",
        // components: {AllAuctionsView},
        components: {
            'all-auctions-view': AllAuctionsView,
            'auction-view': AuctionView,
            'chat-view': ChatView,
            'chats-view': ChatsView
            'main-view': MainView,
            'profile-view': ProfileView,
            'user-auctions-view': UserAuctionsView
        },
        data: function() {
            return {
                //
            }
        }
    }
</script>

<style scoped>

</style>