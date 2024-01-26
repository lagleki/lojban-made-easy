---
title: История Ложбана
---

<div class="lojbo"></div>

Ложбан - это язык, предложенный в качестве средства представления знаний и моста между разговорными языками, языками программирования и языками науки и математики.
Ложбан был создан группой исследователей в 1987 году.

## История Lojban

_Боб ЛеШевалье, один из создателей Lojban_.

Изначально грамматика TLI Loglan не была разработана с использованием формального анализатора, и история этого языка повлияла на последующие усилия по созданию Lojban.

a) JCB обнаружил работы Виктора Ингве где-то в 60-х или начале 70-х годов, и поэтому пришел на идею кодифицировать грамматику в набор правил. Он также придумал несколько целей для этой кодифицированной грамматики, которые я не очень хорошо помню. Но он не смог достичь этих целей, какими бы они ни были, хотя они были связаны с кодированием того, что JCB понимал как "человеческую грамматику".

b) Около 1976-78 годов усилия изменились на использование грамматики YACC LALR-1 в качестве стандарта для кодирования грамматики, потому что несколько человек умели пользоваться YACC. Большая часть грамматики была закодирована, но казалось, что невозможно добиться того, чтобы "машинная грамматика" парсила вещи так же, как это делала "человеческая грамматика".

c) Проблема была решена около 1980 года, я думаю, Джеффом Протеро, тогда студентом Университета Вашингтона, который использовал определяемые терминаторы для скобок конструкций, которые YACC бы предоставлял с помощью своей обработки ошибок. До 1982-1983 годов было достигнуто полной грамматики YACC для языка с использованием коррекции ошибок.

Когда мы начали перерабатывать Lojban, наша цель была сохранить грамматику Loglan в ее полном объеме, меняя только слова. Таким образом, мы были связаны ограничениями дизайна оригинального языка. JCB пытался играть в игры с авторскими правами на формальную грамматику (как он делал с словами языка), но он был на невозможной юридической почве, учитывая, что так много работы было сделано Протеро и другими, а также известные юридические вопросы при авторском праве на компьютерный алгоритм.

Но мы переосмыслили лексикон cmavo, и мы хотели включить грамматические компоненты для времени и MEX, которые JCB никогда не смог реализовать. Таким образом, сначала с помощью Протеро и парня по имени Джефф Тейлор и других, которые знали YACC, я попытался переосмыслить грамматику YACC с нуля, но не пытаясь переизобретать колесо. В 1991 году Коуэн взял на себя то, что я сделал, и значительно улучшил его, в конечном итоге достигнув базовой грамматики, перечисленной в CLL (которая до сих пор является официальной грамматикой). Но грамматика все еще была грамматикой YACC со всеми ее ограничениями.

Попытки создать грамматику PEG остаются неофициальными, и, честно говоря, я никогда не смотрел на грамматику PEG и, вероятно, не понимал бы ее, если бы посмотрел. YACC был достаточно сложным для меня, и, изучив грамматику YACC для Lojban, я так и не смог свободно использовать, предположительно, более простую грамматику E-BNF (хотя я изучал несколько компьютерных языков, используя BNF).

Таким образом, длинный ответ на ваш вопрос, насколько я понимаю, заключается в том, что грамматика всегда задумывалась как наиболее общего назначения. Возможность опускания терминаторов не была высоким приоритетом в общем случае, хотя некоторые из них были желательными; ничего не было более неприятным, чем попытаться понять, что было и что не было завершено, когда вы выражали строку, например, kukukeiku. (Язык JCB использовал <gu> вместо **ku**, и поэтому звучал как детская болтовня. Lojban с полными терминаторами - это просто **kuku**.)

Некоторые из необщих конструкций возникли потому, что они не могли заставить YACC работать с полностью общими конструкциями, или им требовалось слишком много использования неприятных терминаторов. Таким образом, появилось множество различных семейств логических связок, каждое из которых связывает различный тип конструкций. Эти решения в основном датировались эрой JCB, хотя мы добавили некоторые новые вещи, которые можно было связать (например, относительные придаточные), и, следовательно, некоторые новые семейства, большинство из которых в конечном итоге исчезли (оставив, например, zi'e, который больше не является основой для семейства логических связок). Мы также отказались от попыток наложить формальную грамматику на составные части PA и UI, так что есть строки каждого из этих cmavo, которые технически грамматические, но не имеют смысла: pi'epaime'ipipi'e. Но в большинстве случаев, основная грамматика языка остается той, что была в языке JCB до формализации, с добавлением конструкций опускаемых терминаторов там, где они могут обеспечить полезные и, тем не менее, синтаксически однозначные конструкции.