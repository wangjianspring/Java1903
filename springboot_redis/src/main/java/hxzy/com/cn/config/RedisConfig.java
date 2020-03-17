package hxzy.com.cn.config;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.redis.connection.jedis.JedisConnectionFactory;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.serializer.StringRedisSerializer;

import redis.clients.jedis.JedisPoolConfig;
/**
 * 什么时候加载这些自己的配置文件
 * WebApplicationContext加载完毕之后
 * spring的容器加载完毕之后就去加载我们自己的配置文件
 * 
 * 我项目里面有很多xml，我要求在spring容器加载完毕之后才去加载我们自己的xml
 * 
 * 你只需要些一个类去继承webApplicationContext/ApplicationContext 就可以了
 */
@Configuration
public class RedisConfig {
	//需要写一个redis的连接池信息
	@Bean
	@ConfigurationProperties(prefix="spring.redis.pool")
	public JedisPoolConfig getPoolConfig() {
		JedisPoolConfig poolConfig=new JedisPoolConfig();
//		poolConfig.setMaxTotal(20);
//		poolConfig.setMaxIdle(10);
//		poolConfig.setMinIdle(2);
//		System.out.println("最小链接默认是0，改为2");
		System.out.println(poolConfig.getMaxIdle());
		return poolConfig;
	}
	//需要写一个redis的连接信息【如端口和IP地址】
	@SuppressWarnings("deprecation")
	@Bean 
	@ConfigurationProperties(prefix="hxzy.redis")
	public JedisConnectionFactory getRedisFactory(JedisPoolConfig config) {
		JedisConnectionFactory fac=new JedisConnectionFactory(config);
		System.out.println(config.getMaxIdle());
//		fac.setHostName("192.168.1.5");
//		fac.setPort(6379);
		System.out.println("加载链接地址");
		return fac;
	}
	//返回redisTmplates模板
	@Bean 
	public RedisTemplate<String, Object> getRedisTemplate(JedisConnectionFactory factory ){
		RedisTemplate<String, Object> template=new RedisTemplate<String, Object>();
		template.setConnectionFactory(factory);
		template.setKeySerializer(new StringRedisSerializer());
		template.setValueSerializer(new StringRedisSerializer());
		return template;
	}	

 }
