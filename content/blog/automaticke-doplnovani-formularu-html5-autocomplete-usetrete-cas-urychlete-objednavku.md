+++
modified = 2021-01-07T00:09:00Z
published = 2021-01-07T00:09:44Z
[seo]
description = "HTML5 atribut autocomplete dokáže zákazníkům ušetřit čas a prodejcům urychlit objednávkový proces. Přečtěte si, jak správně autocomplete u formulářů nastavit."
section = "Frontend"
tags = ["frontend", "html", "html5"]
title = "Ušetřete zákazníkům čas povolením automatického předvyplňování formulářů"
type = "article"
[seo.author]
name = "Jan Švábík"
url = "https://jansvabik.cz/"

+++
Dnes se podíváme na atribut `autocomplete` ze specifikace HTML5. Ten totiž dokáže velmi dobře vašim zákazníkům ušetřit čas a urychlí tak například objednávkový nebo registrační proces. Uživatele tak nemusí odradit, že musí vyplnit například fakturační adresu.

## Krátký příběh

Roky jsem se věnoval frontendu, respektive jen kódování webů a jemu velmi blízkým technologiím. Začíná však být bohužel znát, že jsem postupně přestal psát weby a přeorientoval se jen na backend.

Když jsem se totiž od svého spolužáka ze střední školy [Emila Čelustky](https://www.linkedin.com/in/emil-čelustka-00a698186/ "Emil Čelustka"), věrného frontendisty, dozvěděl o dalších hodnotách atributu `autocomplete` (kromě _on_ a _off_), měl jsem _ústa dokořán_.

Do tohoto dne jsem měl za to, že prohlížeče doplňují uložené informace uživatelů na základě atributu `name`, jak jsem však byl poučen, takto to není. Nějaké základní automatické doplňování v některých prohlížečích sice funguje, ale jasně stanoveného doplňování lze dosáhnout pouze nastavením vhodné hodnoty atributu `autocomplete`.

## Nastavení atributu autocomplete

Aby všechny moderní prohlížeče doplňovaly v prohlížeči uložené údaje správně (ale hlavně všechny do správných polí), je třeba atributu `autocomplete` daného `input` prvku nastavit správnou hodnotu, a to podle informace, kterou chceme do prvku automaticky doplnit.

Nyní budu pouze citovat vybrané hodnoty a text, který bude prohlížečem do pole automaticky doplněn, z [dokumentace MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete), v níž je vše krásně popsané a vysvětlené. Tyto hodnoty urychlí váš objednávkový proces.

* **name** – celé jméno zákazníka
* **street-address** – ulice a číslo domu
* **address-level2** – město nebo jiná obec
* **postal-code** – poštovní směrovací číslo
* **email** – e-mailová adresa
* **tel** – telefonní číslo včetně mezinárodní předvolby

Potřebujete-li tyto údaje více rozpadené (například adresu rozdělit na ulici a na číslo domu), doporučuji projít si již jednou zmíněnou [MDN dokumentaci](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete). Ta zahrnuje také další možnosti, jako jsou údaje o platební kartě, tituly, pohlaví nebo třeba narozeniny.