User.create(name: 'David Sands', email: "Davidmaxsands@gmail.com", is_dark: true, password: '0')
User.create(name: 'Sam', email: "Sam@gmail.com", is_dark: false, password: '0')

Project.create(project_name: "FireStock", url: "example.com", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam scelerisque elementum justo id fermentum. Nunc lorem velit, tincidunt eleifend sodales ac, ultricies quis dui. Etiam bibendum placerat dolor id imperdiet. Vivamus lobortis neque ante, nec vehicula nisl imperdiet ac.", generated_proj_id: 'C1437744913717', user_id: 1)
Project.create(project_name: "Reaper Pepper", url: "example.com", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lobortis neque ante, nec vehicula nisl imperdiet ac.", generated_proj_id: 'C1195391283095', user_id: 1)
Project.create(project_name: "TOAST HOUSE", url: "example.com", description: "20 toasters, 1 man, lots of toast.", generated_proj_id: 'C1195391283095', user_id: 2)

a = Analytic.create(referral_site: 'Google', page_path: '/home', user_ip: '51.159.180.239', user_city: 'Paris', user_country_code: 'FR', user_country_name: 'France', user_timezone: 'Europe/Paris', user_languages: 'fr-FR,frp,br,co,ca,eu,oc', user_os: 'MacIntel', is_mobile: 'true', project_id: 1 )
b = Analytic.create(referral_site: 'Google', page_path: '/home', user_ip: '51.159.180.239', user_city: 'Paris', user_country_code: 'FR', user_country_name: 'France', user_timezone: 'Europe/Paris', user_languages: 'fr-FR,frp,br,co,ca,eu,oc', user_os: 'MacIntel', is_mobile: 'true', project_id: 1 )
c = Analytic.create(referral_site: 'Google', page_path: '/home', user_ip: '51.159.180.239', user_city: 'Paris', user_country_code: 'FR', user_country_name: 'France', user_timezone: 'Europe/Paris', user_languages: 'fr-FR,frp,br,co,ca,eu,oc', user_os: 'MacIntel', is_mobile: 'true', project_id: 1 )
d = Analytic.create(referral_site: 'Google', page_path: '/home', user_ip: '51.159.180.239', user_city: 'Paris', user_country_code: 'FR', user_country_name: 'France', user_timezone: 'Europe/Paris', user_languages: 'fr-FR,frp,br,co,ca,eu,oc', user_os: 'MacIntel', is_mobile: 'true', project_id: 1 )
e = Analytic.create(referral_site: 'Google', page_path: '/about', user_ip: '51.159.180.239', user_city: 'Paris', user_country_code: 'FR', user_country_name: 'France', user_timezone: 'Europe/Paris', user_languages: 'fr-FR,frp,br,co,ca,eu,oc', user_os: 'MacIntel', is_mobile: 'true', project_id: 1 )
f = Analytic.create(referral_site: 'Google', page_path: '/home', user_ip: '51.159.180.239', user_city: 'Paris', user_country_code: 'FR', user_country_name: 'France', user_timezone: 'Europe/Paris', user_languages: 'fr-FR,frp,br,co,ca,eu,oc', user_os: 'MacIntel', is_mobile: 'true', project_id: 1 )
g = Analytic.create(referral_site: 'Google', page_path: '/home', user_ip: '51.159.180.239', user_city: 'Paris', user_country_code: 'FR', user_country_name: 'France', user_timezone: 'Europe/Paris', user_languages: 'fr-FR,frp,br,co,ca,eu,oc', user_os: 'MacIntel', is_mobile: 'true', project_id: 1 )
h = Analytic.create(referral_site: 'Google', page_path: '/investment', user_ip: '51.159.180.239', user_city: 'Paris', user_country_code: 'FR', user_country_name: 'France', user_timezone: 'Europe/Paris', user_languages: 'fr-FR,frp,br,co,ca,eu,oc', user_os: 'MacIntel', is_mobile: 'true', project_id: 1 )
i = Analytic.create(referral_site: 'Google', page_path: '/inquire', user_ip: '51.159.180.239', user_city: 'Paris', user_country_code: 'FR', user_country_name: 'France', user_timezone: 'Europe/Paris', user_languages: 'fr-FR,frp,br,co,ca,eu,oc', user_os: 'MacIntel', is_mobile: 'true', project_id: 1 )
j = Analytic.create(referral_site: 'Medium.com', page_path: '/home', user_ip: '51.15.43.217', user_city: 'Amsterdam"', user_country_code: 'NL', user_country_name: 'Netherlands', user_timezone: 'Europe/Amsterdam"', user_languages: 'nl-NL,fy-NL', user_os: 'MacIntel', is_mobile: 'false', project_id: 1 )
k = Analytic.create(referral_site: 'Medium.com', page_path: '/about', user_ip: '51.15.43.217', user_city: 'Amsterdam', user_country_code: 'NL', user_country_name: 'Netherlands', user_timezone: 'Europe/Amsterdam"', user_languages: 'nl-NL,fy-NL', user_os: 'MacIntel', is_mobile: 'false', project_id: 1 )
l = Analytic.create(referral_site: 'Medium.com', page_path: '/inquire', user_ip: '51.15.43.217', user_city: 'Amsterdam', user_country_code: 'NL', user_country_name: 'Netherlands', user_timezone: 'Europe/Amsterdam', user_languages: 'nl-NL,fy-NL', user_os: 'MacIntel', is_mobile: 'false', project_id: 1 )
m = Analytic.create(referral_site: 'Medium.com', page_path: '/home', user_ip: '51.15.43.217', user_city: 'Amsterdam', user_country_code: 'NL', user_country_name: 'Netherlands', user_timezone: 'Europe/Amsterdam', user_languages: 'nl-NL,fy-NL', user_os: 'MacIntel', is_mobile: 'false', project_id: 1 )
n = Analytic.create(referral_site: 'Medium.com', page_path: '/home', user_ip: '51.79.161.250', user_city: 'Singapore', user_country_code: 'SG', user_country_name: 'Singapore', user_timezone: 'Asia/Singapore', user_languages: 'cmn,en-SG,ms-SG,ta-SG,zh-SG', user_os: 'MacIntel', is_mobile: 'true', project_id: 1 )
o = Analytic.create(referral_site: 'linkedin.com', page_path: '/about', user_ip: '51.79.161.250', user_city: 'Singapore', user_country_code: 'SG', user_country_name: 'Singapore', user_timezone: 'Asia/Singapore', user_languages: 'cmn,en-SG,ms-SG,ta-SG,zh-SG', user_os: 'MacIntel', is_mobile: 'true', project_id: 1 )
p2 = Analytic.create(referral_site: 'linkedin.com', page_path: '/home', user_ip: '51.79.161.250', user_city: 'Singapore', user_country_code: 'SG', user_country_name: 'Singapore', user_timezone: 'Asia/Singapore', user_languages: 'cmn,en-SG,ms-SG,ta-SG,zh-SG', user_os: 'MacIntel', is_mobile: 'true', project_id: 1 )
q = Analytic.create(referral_site: 'linkedin.com', page_path: '/investment', user_ip: '51.79.161.250', user_city: 'Singapore', user_country_code: 'SG', user_country_name: 'Singapore', user_timezone: 'Asia/Singapore', user_languages: 'cmn,en-SG,ms-SG,ta-SG,zh-SG', user_os: 'MacIntel', is_mobile: 'true', project_id: 1 )
r = Analytic.create(referral_site: 'linkedin.com', page_path: '/portfolio', user_ip: '51.79.161.250', user_city: 'Singapore', user_country_code: 'SG', user_country_name: 'Singapore', user_timezone: 'Asia/Singapore', user_languages: 'cmn,en-SG,ms-SG,ta-SG,zh-SG', user_os: 'MacIntel', is_mobile: 'true', project_id: 1 )
s = Analytic.create(referral_site: 'linkedin.com', page_path: '/home', user_ip: '51.79.161.250', user_city: 'Singapore', user_country_code: 'SG', user_country_name: 'Singapore', user_timezone: 'Asia/Singapore', user_languages: 'cmn,en-SG,ms-SG,ta-SG,zh-SG', user_os: 'MacIntel', is_mobile: 'true', project_id: 1 )
t = Analytic.create(referral_site: 'Google', page_path: '/investment', user_ip: '51.81.200.149', user_city: 'Oregon', user_country_code: 'US', user_country_name: 'United States', user_timezone: 'America/Los_Angeles', user_languages: 'en-US,es-US,haw,fr', user_os: 'MacIntel', is_mobile: 'false', project_id: 1 )
u = Analytic.create(referral_site: 'Google', page_path: '/home', user_ip: '51.81.200.149', user_city: 'Oregon', user_country_code: 'US', user_country_name: 'United States', user_timezone: 'America/Los_Angeles', user_languages: 'en-US,es-US,haw,fr', user_os: 'MacIntel', is_mobile: 'false', project_id: 1 )
v = Analytic.create(referral_site: 'Google', page_path: '/portfolio', user_ip: '51.81.200.149', user_city: 'Oregon', user_country_code: 'US', user_country_name: 'United States', user_timezone: 'America/Los_Angeles', user_languages: 'en-US,es-US,haw,fr', user_os: 'MacIntel', is_mobile: 'false', project_id: 1 )
w = Analytic.create(referral_site: 'Google', page_path: '/home', user_ip: '51.81.200.149', user_city: 'Oregon', user_country_code: 'US', user_country_name: 'United States', user_timezone: 'America/Los_Angeles', user_languages: 'en-US,es-US,haw,fr', user_os: 'MacIntel', is_mobile: 'false', project_id: 1 )
x = Analytic.create(referral_site: 'Google', page_path: '/home', user_ip: '135.148.233.69', user_city: 'Reston', user_country_code: 'US', user_country_name: 'United States', user_timezone: 'America/New_York', user_languages: 'en-US,es-US,haw,fr', user_os: 'MacIntel', is_mobile: 'false', project_id: 1 )
y = Analytic.create(referral_site: 'Google', page_path: '/inquire', user_ip: '135.148.233.69', user_city: 'Reston', user_country_code: 'US', user_country_name: 'United States', user_timezone: 'America/New_York', user_languages: 'en-US,es-US,haw,fr', user_os: 'MacIntel', is_mobile: 'false', project_id: 1 )
z = Analytic.create(referral_site: 'Google', page_path: '/about', user_ip: '135.148.233.69', user_city: 'Reston', user_country_code: 'US', user_country_name: 'United States', user_timezone: 'America/New_York', user_languages: 'en-US,es-US,haw,fr', user_os: 'MacIntel', is_mobile: 'false', project_id: 1 )
aa = Analytic.create(referral_site: 'Google', page_path: '/investment', user_ip: '135.148.233.69', user_city: 'Reston', user_country_code: 'US', user_country_name: 'United States', user_timezone: 'America/New_York', user_languages: 'en-US,es-US,haw,fr', user_os: 'MacIntel', is_mobile: 'false', project_id: 1 )
bb = Analytic.create(referral_site: 'Google', page_path: '/home', user_ip: '135.148.233.69', user_city: 'Reston', user_country_code: 'US', user_country_name: 'United States', user_timezone: 'America/New_York', user_languages: 'en-US,es-US,haw,fr', user_os: 'MacIntel', is_mobile: 'false', project_id: 1 )
cc = Analytic.create(referral_site: 'Medium.com', page_path: '/investment', user_ip: '54.37.5.64', user_city: 'London', user_country_code: 'GB', user_country_name: 'United Kingdom', user_timezone: 'Europe/London', user_languages: 'en-GB,cy-GB,gd', user_os: 'MacIntel', is_mobile: 'false', project_id: 1 )
dd = Analytic.create(referral_site: 'Medium.com', page_path: '/home', user_ip: '54.37.5.64', user_city: 'London', user_country_code: 'GB', user_country_name: 'United Kingdom', user_timezone: 'Europe/London', user_languages: 'en-GB,cy-GB,gd', user_os: 'MacIntel', is_mobile: 'false', project_id: 1 )
ee = Analytic.create(referral_site: 'Medium.com', page_path: '/inquire', user_ip: '54.37.5.64', user_city: 'London', user_country_code: 'GB', user_country_name: 'United Kingdom', user_timezone: 'Europe/London', user_languages: 'en-GB,cy-GB,gd', user_os: 'MacIntel', is_mobile: 'false', project_id: 1 )
ff = Analytic.create(referral_site: 'Medium.com', page_path: '/home', user_ip: '54.37.5.64', user_city: 'London', user_country_code: 'GB', user_country_name: 'United Kingdom', user_timezone: 'Europe/London', user_languages: 'en-GB,cy-GB,gd', user_os: 'MacIntel', is_mobile: 'false', project_id: 1 )
gg = Analytic.create(referral_site: 'Google', page_path: '/inquire', user_ip: '54.37.5.64', user_city: 'London', user_country_code: 'GB', user_country_name: 'United Kingdom', user_timezone: 'Europe/London', user_languages: 'en-GB,cy-GB,gd', user_os: 'MacIntel', is_mobile: 'false', project_id: 1 )
hh = Analytic.create(referral_site: 'Google', page_path: '/home', user_ip: '51.159.170.239', user_city: 'Paris', user_country_code: 'FR', user_country_name: 'France', user_timezone: 'Europe/Paris', user_languages: 'fr-FR,frp,br,co,ca,eu,oc', user_os: 'MacIntel', is_mobile: 'true', project_id: 1 )
ii = Analytic.create(referral_site: 'Google', page_path: '/about', user_ip: '51.159.170.239', user_city: 'Paris', user_country_code: 'FR', user_country_name: 'France', user_timezone: 'Europe/Paris', user_languages: 'fr-FR,frp,br,co,ca,eu,oc', user_os: 'MacIntel', is_mobile: 'true', project_id: 1 )
jj = Analytic.create(referral_site: 'Google', page_path: '/home', user_ip: '51.159.170.239', user_city: 'Paris', user_country_code: 'FR', user_country_name: 'France', user_timezone: 'Europe/Paris', user_languages: 'fr-FR,frp,br,co,ca,eu,oc', user_os: 'MacIntel', is_mobile: 'true', project_id: 1 )
kk = Analytic.create(referral_site: 'Google', page_path: '/home', user_ip: '51.159.170.239', user_city: 'Paris', user_country_code: 'FR', user_country_name: 'France', user_timezone: 'Europe/Paris', user_languages: 'fr-FR,frp,br,co,ca,eu,oc', user_os: 'MacIntel', is_mobile: 'true', project_id: 1 )
ll = Analytic.create(referral_site: 'Google', page_path: '/about', user_ip: '51.159.170.239', user_city: 'Paris', user_country_code: 'FR', user_country_name: 'France', user_timezone: 'Europe/Paris', user_languages: 'fr-FR,frp,br,co,ca,eu,oc', user_os: 'MacIntel', is_mobile: 'true', project_id: 1 )
mm = Analytic.create(referral_site: 'Google', page_path: '/investment', user_ip: '51.159.170.239', user_city: 'Paris', user_country_code: 'FR', user_country_name: 'France', user_timezone: 'Europe/Paris', user_languages: 'fr-FR,frp,br,co,ca,eu,oc', user_os: 'MacIntel', is_mobile: 'true', project_id: 1 )
oo = Analytic.create(referral_site: 'Google', page_path: '/home', user_ip: '51.159.170.239', user_city: 'Paris', user_country_code: 'FR', user_country_name: 'France', user_timezone: 'Europe/Paris', user_languages: 'fr-FR,frp,br,co,ca,eu,oc', user_os: 'MacIntel', is_mobile: 'true', project_id: 1 )

a.update(created_at: "2022-04-13 20:28:12.043536")
b.update(created_at: "2022-04-13 20:28:12.043536")
c.update(created_at: "2022-04-13 20:28:12.043536")
d.update(created_at: "2022-04-14 20:28:12.043536")
e.update(created_at: "2022-04-14 20:28:12.043536")
f.update(created_at: "2022-04-14 20:28:12.043536")
g.update(created_at: "2022-04-13 20:28:12.043536")
h.update(created_at: "2022-04-13 20:28:12.043536")
i.update(created_at: "2022-04-15 20:28:12.043536")
j.update(created_at: "2022-04-15 20:28:12.043536")
k.update(created_at: "2022-04-15 20:28:12.043536")
l.update(created_at: "2022-04-16 20:28:12.043536")
m.update(created_at: "2022-04-16 20:28:12.043536")
n.update(created_at: "2022-04-16 20:28:12.043536")
o.update(created_at: "2022-04-16 20:28:12.043536")
p2.update(created_at: "2022-04-13 20:28:12.043536")
q.update(created_at: "2022-04-13 20:28:12.043536")
r.update(created_at: "2022-04-17 20:28:12.043536")
s.update(created_at: "2022-04-17 20:28:12.043536")
t.update(created_at: "2022-04-17 20:28:12.043536")
u.update(created_at: "2022-04-17 20:28:12.043536")
v.update(created_at: "2022-04-18 20:28:12.043536")
w.update(created_at: "2022-04-18 20:28:12.043536")
x.update(created_at: "2022-04-18 20:28:12.043536")
y.update(created_at: "2022-04-18 20:28:12.043536")
z.update(created_at: "2022-04-15 20:28:12.043536")
aa.update(created_at: "2022-04-13 20:28:12.043536")
bb.update(created_at: "2022-04-13 20:28:12.043536")
cc.update(created_at: "2022-04-13 20:28:12.043536")
dd.update(created_at: "2022-04-13 20:28:12.043536")
ee.update(created_at: "2022-04-13 20:28:12.043536")
ff.update(created_at: "2022-04-15 20:28:12.043536")
gg.update(created_at: "2022-04-13 20:28:12.043536")
hh.update(created_at: "2022-04-13 20:28:12.043536")
ii.update(created_at: "2022-04-18 20:28:12.043536")
jj.update(created_at: "2022-04-13 20:28:12.043536")
kk.update(created_at: "2022-04-14 20:28:12.043536")
ll.update(created_at: "2022-04-13 20:28:12.043536")
mm.update(created_at: "2022-04-13 20:28:12.043536")
oo.update(created_at: "2022-04-15 20:28:12.043536")

pp = Duration.create(elapsed: 22458, project_id: 1)
qq = Duration.create(elapsed: 55668, project_id: 1)
rr = Duration.create(elapsed: 56988, project_id: 1)
ss = Duration.create(elapsed: 98665, project_id: 1)
tt = Duration.create(elapsed: 75895, project_id: 1)
uu = Duration.create(elapsed: 100785, project_id: 1)
vv = Duration.create(elapsed: 10587, project_id: 1)
ww = Duration.create(elapsed: 77895, project_id: 1)
xx = Duration.create(elapsed: 115843, project_id: 1)
yy = Duration.create(elapsed: 80564, project_id: 1)
zz = Duration.create(elapsed: 89576, project_id: 1)
aaa = Duration.create(elapsed: 56988, project_id: 1)
bbb = Duration.create(elapsed: 7859, project_id: 1)
ccc = Duration.create(elapsed: 46879, project_id: 1)
ddd = Duration.create(elapsed: 55679, project_id: 1)
eee = Duration.create(elapsed: 56988, project_id: 1)
fff = Duration.create(elapsed: 68957, project_id: 1)
ggg = Duration.create(elapsed: 56988, project_id: 1)

pp.update(created_at: "2022-04-14 20:28:12.043536")
qq.update(created_at: "2022-04-14 20:28:12.043536")
rr.update(created_at: "2022-04-14 20:28:12.043536")
ss.update(created_at: "2022-04-14 20:28:12.043536")
tt.update(created_at: "2022-04-15 20:28:12.043536")
uu.update(created_at: "2022-04-15 20:28:12.043536")
vv.update(created_at: "2022-04-15 20:28:12.043536")
ww.update(created_at: "2022-04-15 20:28:12.043536")
xx.update(created_at: "2022-04-16 20:28:12.043536")
yy.update(created_at: "2022-04-16 20:28:12.043536")
zz.update(created_at: "2022-04-16 20:28:12.043536")
aaa.update(created_at: "2022-04-17 20:28:12.043536")
bbb.update(created_at: "2022-04-17 20:28:12.043536")
ccc.update(created_at: "2022-04-17 20:28:12.043536")
ddd.update(created_at: "2022-04-17 20:28:12.043536")
eee.update(created_at: "2022-04-18 20:28:12.043536")
fff.update(created_at: "2022-04-18 20:28:12.043536")
ggg.update(created_at: "2022-04-18 20:28:12.043536")

