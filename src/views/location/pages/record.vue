<template>
    <div class="record">
        <div>

        </div>
        <van-popup
            v-model="show"
            position="bottom"
            :style="{ height: '40%' }">
            <van-datetime-picker
                v-model="date"
                type="year-month"
                :min-date="minDate"
                :formatter="formatter"
            />
        </van-popup>

    </div>
</template>

<script>
    import { time2Obj } from "@/utils/time";
    export default {
        name: "record",
        data () {
            return {
                show: true,
                date: new Date()
            }
        },
        mounted () {
            this.getList()
        },
        methods: {
            getList () {
                this.$http.get(this.$api.location.list, {
                    useruuid: localStorage.uuid,
                    dateTime: time2Obj(this.date).dateStr
                })
            }
        }
    }
</script>

<style scoped>
    #maps {
        height: 1rem;
    }
</style>