package hxzy.com.cn.test;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.serializer.Jackson2JsonRedisSerializer;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import hxzy.com.cn.SpringbootRedisApplication;
import hxzy.com.cn.model.Well;


@RunWith(SpringJUnit4ClassRunner.class)//让junit与spring环境进行整合
@SpringBootTest(classes= {SpringbootRedisApplication.class})
public class SpringbootRedisTest {
	@Autowired	
	private RedisTemplate<String, Object>  redisTemplate;
	/**
	 * 保存数据到redis
	 */
	  @Test
	  public void handleValue() {
		  redisTemplate.opsForValue().set("well", "well");
	  }
	  @Test
	  public void getValue() {
		  String  k1 = (String) redisTemplate.opsForValue().get("k1");
		  System.out.println(k1);
	  }
	  @Test
	  public void ObjectForValue() {
		  //如果是对象我们需要重新去设置序列化的接口
		  redisTemplate.setValueSerializer(new Jackson2JsonRedisSerializer<>(Well.class));
		  Well well=new Well();
		  well.setId(1);
		  well.setWell_height(1000);
		  well.setWellAddress("利比亚");
		  well.setWellName("艾哈达布");
		  redisTemplate.opsForValue().set("ahbed", well);
	  }
	  @Test
	  public void ObjectGetValue() {
		  //如果是对象我们需要重新去设置序列化的接口
		  redisTemplate.setValueSerializer(new Jackson2JsonRedisSerializer<>(Well.class));

		  Well well = (Well) redisTemplate.opsForValue().get("ahbed");
		  System.out.println(well);
	  }
}
