<template>
    <div>
        <div id="passport" class="part"></div>
        <v-card class="pa-4 blue-grey--text text--darken-2" flat>
            <v-card-title class="justify-center">
                <h2 class="mb-2">{{passport}}</h2>
            </v-card-title>
            <v-layout row wrap style="width:900px;">
                <template v-for="itemPassport in itemsPassport">
                    <v-flex xs4 class="pa-2" v-apparate:fadeIn="{y:100}">
                        <p style="font-size: 1.3em; font-weight: bolder;">
                            {{itemPassport.title}}
                        </p>
                    </v-flex>
                    <v-flex xs8 class="pa-2" v-apparate:fadeIn="{y:300}">
                        <p style="font-size: 1.3em;" v-html="itemPassport.content"></p>
                    </v-flex>
                </template>
            </v-layout>
        </v-card>

        <div id="history" class="part"></div>
        <v-card class="pa-4 mt-5 blue-grey--text text--darken-2" flat>
            <v-card-title class="justify-center">
                <h2 class="mb-2">{{history}}</h2>
            </v-card-title>
            <v-layout row wrap style="max-width:900px">
                <template v-for="item in items">
                    <v-flex xs2 class="text-xs-center mt-3" v-apparate:fadeIn="{y:100}">
                        <h4 style="font-size: 1.3em;">{{item.title}}</h4>
                    </v-flex>
                    <v-flex style="font-size: 1.3em;" xs10 class="mt-3" v-apparate:fadeIn="{y:300}">{{item.text}}</v-flex>
                </template>
            </v-layout>
        </v-card>

        <div id="license" class="part"></div>
        <v-card flat class="mt-5 text-xs-center pa-4">
            <img src="public/docs/license.jpg" alt="" style="max-width: 800px;">
        </v-card>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                passport: 'Рудный қаласы әкімдігінің «№ 15 орта мектебі» КММ төлқұжаты',
                itemsPassport: [
                    {

                        title: 'Аты',
                        content: 'Рудный қаласы әкімдігінің «№ 15 орта мектебі»<br> коммуналдық мемлекеттік мекемесі</br> '
                    },
                    {
                        title: 'Салынған жылы',
                        content: '1965 ж'
                    },
                    {
                        title: 'Мекен-жайы, телефон, электрондық пошта',
                        content: 'Қостанай облысы, Рудный қаласы, <br>Ленин көшесі, 99<br>Тел. 8(71431) 4-08-37, 8 (71431) 4-49-50<br>Эл.адрес <b>school15kaz@yandex.ru</b>'
                    },
                    {
                        title: 'Директордың аты-жөні',
                        content: 'Нұрмағанбетов Қайыржан Рақымжанұлы'
                    },
                    {
                        title: 'Ғимарат',
                        content: 'Ғимарат алаңы – 23717 кв. м <br>Жер алаңы – 18 835 га</br> '
                    },
                    {
                        title: 'Мектептің қуаты',
                        content: '600'
                    },
                    {
                        title: 'Кадрлар ',
                        content: 'Жалпы мұғалімдер саны – 77<br> Оның ішінде жоғары біліммен – 68<br> Жоғары санатты – 11<br> Бірінші санатты – 225<br> Қызмет көрсететін жұмыскерлер – 32</br> '
                    },
                    {
                        title: '3 жылда жүргізілген жөндеу жұмыстары ЖСҚ, жұмыс түрі, бағасы ',
                        content: '2012 ж. 1 160 000 теңге жылу жүйесі (жөндеуші «Дәуір-КЕН»ЖШС)<br> 2013-14ж. Күрделі жөндеу -374 629 000 (жөндеуші «Елена-Д»ЖШС)<br> 2014-2015ж. Күрделі жөндеу  (374 629 000 тенге) аяқталды.</br> '
                    },
                    {
                        title: 'Материалдық-техникалық база',
                        content: 'Оқу кабинеттер саны – 33<br> Шеберханалар саны – 2<br> Оқу үрдісінде қолданылатын компьютердің саны – 49,<br> оның ішінде Интернетке қосылды  – 34 және бір оқушыға, компьютер-14,5<br> Интерактивтік құрал – 9<br> Асхана (120 орындық) – 101,2 кв.метр<br> Кітапхана (14 оқу орнына) – 65,7 кв.метр<br> Спорттық зал (бар) – 255 кв.метр</br> '
                    },
                    {
                        title: 'Мектеп кітапханасының қоры ',
                        content: 'Кітаптар (оқулықтарды қоса), журналдар саны –  33463 экз.<br> Оның ішінде мектеп оқулықтары – 18976 экз.</br> '
                    },
                    {
                        title: 'Медициналық кабинет',
                        content: 'Лицензияланған медициналық кабинетте: қабылдау және екпе кабинеті.<br> Медициналық жұмыскер – 1 адам </br> '
                    },
                    {
                        title: 'Өрт сигнализациясы',
                        content: 'Бар'
                    },
                    {
                        title: 'Орташа еңбек ақысы  ',
                        content: 'Мұғалімдер (5-11 сыныптар) – 94 031 теңге,<br> Мұғалімдер (1-4 сыныптар) – 75 837<br> Қызмет көрсететін жұмыскерлер – 35 571 теңге</br> '
                    },
                    {
                        title: 'Бюджет',
                        content: '2013 ж – 157 125 000 млн. Тнг<br> 2014 ж -170 275,000 млн. Тнг </br> '
                    },
                    {
                        title: 'Грантқа оқитын түлектердің саны',
                        content: '2010 ж.- 6 2011 ж.- 11<br> 2012 ж.- 8<br> 2013 ж.- 12<br> 2014ж.-2<br> 2015ж.-3<br> 2016ж-3'
                    },
                    {
                        title: 'ҰБТ',
                        content: '2015ж орта балл -86,1<br> Сапа – 37,5<br> 2016 ж  орта балл- 85,8<br> Сапа -55</br> '
                    },
                    {
                        title: 'Тегін тамақ',
                        content: '0-11 сын-1031 оқу<br> 136 оқушы тегін тамақпен қамтылған.<br> 14 оқушы – подвоз. Жалпы тамақ -93%<br> 130 оқушы – буфетный   тамақ ақшасы көлемі 7173 млн тенге</br> '
                    },
                    {
                        title: 'Мектеп директоры: ',
                        content: 'Қ.Р. Нұрмағанбетов'
                    }
                ],
                history: 'Мектеп тарихы',
                items: [
                    {
                        title: '1965',
                        text: 'мектептің ашылуы'
                    },
                    {
                        title: '1966 ',
                        text: 'тұңғыш оқушылар түлегі'
                    },
                    {
                        title: '1978',
                        text: 'математиканы тереңдетіп оқитын сыныптың ашылуы'
                    },
                    {
                        title: '1985',
                        text: 'тәжірибе – бақылау сыныбының ашылуы'
                    },
                    {
                        title: '1990-1991 ',
                        text: '№12 орыс мектебінде мемлекеттік тілде оқытатын сынып ашылды. Мектептің ашылуына бірден бір мұрындық болған Омар Төртбаев, 1990-1991 оқу жылына баратын балалардың тізімін алып, үйді үйге жүріп, үгіт-насихат жүргізді. Ақыр аяғы «ұлтымызды, тілімізді қайтарайық» деп қабат-қабат үйлерді жаяу аралаған Омар ата сол жылы он баланың басын қосып, ең алғашқы мұғалімі болған Әлия Әліпованың қолына табыс етті'
                    },
                    {
                        title: '1993-1994 ',
                        text: 'оқу жылында қазақ сыныптары №15 орта мектебінде жеке шаңырақ көтерді'
                    },
                    {
                        title: '1997',
                        text: 'жылы қайтадан орта мектептің ашылуы. Мектептің алғашқы директоры болып Зоя Көбейқызы Есмуханбетова тағайындалды. Мектептің алғашқы ұстаздары Байкенова Ғ.Қ., Қыстаубаева С.К., Бірімжанова А.К., Кенжетаева Ү.Ж.'
                    },
                    {
                        title: '2000',
                        text: 'жылы мектеп директоры болып Серік Қайырқанұлы Мырзахметов тағайындалды'
                    },
                    {
                        title: '2001',
                        text: 'жылы мектеп бірінші түлектерін мектеп қабырғасынан шығарды. Ал Омар ақсақалдың жинаған алғашқы қарлығаштары бүгінде еліміздің Астана, Алматы сынды ірі қалаларында жұмыс жасауда (Б.Жұрқабаева, Е.Қалдыбиев, Қ.Қырықбаева).'
                    },
                    {
                        title: '2003',
                        text: 'мектептің он жылдығы тойланды'
                    },
                    {
                        title: '2004',
                        text: 'мектеп директоры болып Қайыржан Рақымжанұлы Нұрмағанбетов тағайындалды. №15 қазақ орта мектебінің шаңырақ көтергеніне 15 жылдан асып барады'
                    },
                    {
                        title: '2006',
                        text: '№15 орта мектепте қазақ мектебінің кірпішін қалауға негіз болған құдіретті азамат – Омар Төртбаевтың еңбегі өз бағасына ие болып, Омар Оспанұлына арналған ескерткіш тақта ашылды'
                    },
                    {
                        title: '2009',
                        text: 'мектеп директоры болып Қымбат Исламбекқызы Бірманова тағайындалды'
                    }, {
                        title: '2011',
                        text: 'мектеп директоры болып Қайыржан Рақымжанұлы Нұрмағанбетов тағайындалды'
                    }
                ]
            }
        },
        created() {
            let part = this.$route.params.part
            if (part !== 0) {
                setTimeout(() => {
                    this.scrollTo(part)
                }, 100)
            }
        },
        destroyed() {
            this.scrollTo('passport')
        },
        watch: {
            '$route.params.part'(val) {
                if (val !== 0) {
                    this.scrollTo(val)
                }
            }
        },
        methods: {
            scrollTo(elemId) {
                console.log('scrollTo: ', elemId)
                var e = document.getElementById(elemId);
                if (!!e && e.scrollIntoView) {
                    e.scrollIntoView();
                }
            }
        }
    }
</script>