---
layout: default.liquid
title: Home
---

<section id="about">

## about

Hi! I'm kat and I'm a dorky developer (meant affectionately, of course; I chose the dork life ^~^).

My hobbies involve software development, system administration, infrastructure, smart home projects, hobbyist electronics, playing with <abbr title="software defined radio">SDR</abbr>, reading books and manga, watching anime, cooking and baking.

I am currently studying for an amateur radio qualification in Canada and I hope to eventually get a firearms possession and acquisition license and a first aid qualification.</p>

This website is not for talking about my professional life, but for credence; I am a DevOps engineer with two years of experience and I have a bachelors (at a first) in Digital Forensics and Cyber Security.

</section>

<section id="posts">

## posts

<nav>
<ul>
{% for post in collections.posts.pages %}
<li>
    <article>
        <a href="{{ post.permalink }}"><h3>{{ post.title }}</h3></a>
        <p><time>{{ post.published_date }}</time></P>
    </article>
</li>
{% endfor %}
</ul>
</nav>

</section>

<section id="projects">

## projects

<nav>
    <ul>
            <li>
                <article>
                    <a href="https://github.com/TaimiHUD/TaimiHUD">
                        <h3>TaimiHUD/TaimiHUD</h3>
                    </a>
                    <p>A Rust Guild Wars 2 addon that provides Encounter Timers, Squad Marker Presets and Pathing for Nexus and ArcDPS.</p>
                </article>
            </li>
            <li>
                <article>
                    <a href="https://github.com/kittywitch/infrastructure">
                        <h3>kittywitch/infrastructure</h3>
                    </a>
                    <p>Personal NixOS + Terraform infrastructure repository.</p>
                </article>
            </li>
            <li>
                <article>
                    <a href="https://github.com/gensokyo.zone/infrastructure">
                        <h3>gensokyo-zone/infrastructure</h3>
                    </a>
                    <p>Apartment NixOS + Terraform infrastructure repository, a project with my wife!</p>
                </article>
            </li>
        <li>
            <article>
                <a href="https://github.com/kittywitch/konawall-py">
                    <h3>kittywitch/konawall-py</h3>
                </a>
                <p>Wallpaper changer for multiple desktop environments with modular services intended to be used with boorus, currently konachan and e621.</p>
            </article>
        </li>
    </ul>
</nav>

</section>
