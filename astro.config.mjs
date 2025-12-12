// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
integrations: [
starlight({
title: 'Clean Air DIY Thailand',
description:
'Clean air you can build yourself — affordable, proven, and honest DIY box-fan air filters for Thailand.',
social: [
{
icon: 'github',
label: 'GitHub',
href: 'https://github.com/withastro/starlight',
},
],
sidebar: [
{
label: 'Start Here',
items: [
{ label: 'Home', slug: 'index' },
{ label: 'DIY Kits', slug: 'diy-kits' },
{ label: 'Build Guide', slug: 'build-guide' },
{ label: 'Workshops', slug: 'workshops' },
{ label: 'FAQ & Safety', slug: 'faq-safety' },
{ label: 'About', slug: 'about' },
],
},
],
}),
],
});
